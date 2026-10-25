import os
import json
import urllib.request

API_URL = "https://datasets-server.huggingface.co/rows?dataset=pielet%2Fcat-memes&config=default&split=train&offset=0&limit=55"

TARGET_MEMES = {
    "intro": [
        ("keyboard_cat", "keyboard_cat.jpg"),
        ("polite_cat", "polite_cat.webp"),
        ("screaming_cat", "screaming_cat.jpg"),
    ],
    "lore": [
        ("chemistry_cat", "chemistry_cat.jpg"),
        ("shocked_cat", "shocked_cat.png"),
        ("smug_cat", "smug_cat.jpg"),
        ("two_talking_cats", "two_talking_cats.jpg"),
    ],
    "reactions": [
        ("side_eye_cat", "side_eye_cat.jpg"),
        ("huh_cat", "huh_cat.gif"),
        ("vibing_cat", "vibing_cat.gif"),
        ("popcat", "popcat.gif"),
        ("smudge_cat", "smudge_cat.jpg"),
    ],
    "cute": [
        ("pat_cat", "pat_cat.png"),
        ("happy_happy_happy", "happy_happy_happy.gif"),
        ("chipi_chipi_cat", "chipi_chipi_cat.webp"),
        ("smile_cat", "smile_cat.jpg"),
        ("lil_bub", "lil_bub.jpg"),
    ],
    "romance": [
        ("kiss_cat", "kiss_cat.gif"),
        ("crying_cat", "crying_cat.webp"),
    ],
    "finale": [
        ("polite_cat", "polite_cat_finale.webp"),
        ("happy_happy_happy", "happy_celebrate.gif"),
    ]
}

def main():
    print("Fetching dataset rows from Hugging Face...")
    req = urllib.request.Request(API_URL, headers={"User-Agent": "Project-US/1.0"})
    with urllib.request.urlopen(req) as resp:
        data = json.loads(resp.read().decode("utf-8"))

    rows_by_id = {}
    for r in data.get("rows", []):
        row = r.get("row", {})
        rows_by_id[row.get("id")] = row

    print(f"Retrieved {len(rows_by_id)} unique memes from pielet/cat-memes.")

    manifest = {
        "dataset": "pielet/cat-memes",
        "creator": "Shiyang Jia (https://huggingface.co/pielet)",
        "source": "https://huggingface.co/datasets/pielet/cat-memes",
        "license": "MIT",
        "downloaded_assets": []
    }

    base_dir = os.path.abspath("public/memes")

    for category, memes in TARGET_MEMES.items():
        cat_dir = os.path.join(base_dir, category)
        os.makedirs(cat_dir, exist_ok=True)

        for meme_id, filename in memes:
            if meme_id not in rows_by_id:
                print(f"Warning: {meme_id} not found in dataset!")
                continue

            row = rows_by_id[meme_id]
            file_meta = row.get("file", {})
            src_url = file_meta.get("src")
            out_path = os.path.join(cat_dir, filename)

            print(f"Downloading {meme_id} -> {category}/{filename}...")
            try:
                img_req = urllib.request.Request(src_url, headers={"User-Agent": "Project-US/1.0"})
                with urllib.request.urlopen(img_req) as img_resp:
                    content = img_resp.read()
                    with open(out_path, "wb") as f:
                        f.write(content)

                stat = os.stat(out_path)
                manifest["downloaded_assets"].append({
                    "id": meme_id,
                    "category": category,
                    "localPath": f"/memes/{category}/{filename}",
                    "file_name": row.get("file_name"),
                    "animated": row.get("animated", False),
                    "height": file_meta.get("height"),
                    "width": file_meta.get("width"),
                    "size_bytes": stat.st_size
                })
            except Exception as e:
                print(f"Error downloading {meme_id}: {e}")

    manifest_path = os.path.join(base_dir, "manifest.json")
    with open(manifest_path, "w", encoding="utf-8") as f:
        json.dump(manifest, f, indent=2)

    print(f"Successfully downloaded {len(manifest['downloaded_assets'])} meme assets.")
    print(f"Manifest written to {manifest_path}")

if __name__ == "__main__":
    main()
