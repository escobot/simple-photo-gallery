---
name: add-trip
description: Publish new or updated photo folders from originals/ to the gallery website — normalize file names, generate assets/img/ and assets/thumbs/ with scripts/resize.sh, and add the trip to the `albums` list in assets/site.js. Use when the user says they added photos or a trip folder, or asks to enable/publish/add a trip or album.
---

# Add a trip to the gallery

The site is a static `index.html`. Each trip is one folder name used in three places:

- `originals/<id>/` — full-size photos, **not committed** (gitignored)
- `assets/img/<id>/` — 2400px lightbox copies, generated
- `assets/thumbs/<id>/` — 800px grid thumbnails, generated

and one line in the `albums` array in `assets/site.js` (the page itself, `index.html`, is generic):

```js
{ id: '2024-panama', label: "Panama '24", count: 5 },
```

The page builds the sidebar and grid from that array and expects photos named
`01.jpg` … `NN.jpg` with no gaps, so `count` must equal the number of photos.

Run shell loops with `bash -c '…'`: the user's shell is zsh, which does not
word-split unquoted variables, so `for x in $list` silently runs once.

## Steps

1. **Find what's new.** Compare `ls originals` with the `id:` values in `assets/site.js`.
   A folder whose file count differs from its `count` was extended and needs steps 3–5 too.

2. **Check the folder name** is `<year>-<place>`: lowercase, hyphens, ASCII, no spaces
   (`2024-new-york`, not `New York 2024`). If it isn't, propose the name and confirm
   before renaming — it becomes the public URL (`index.html#2024-new-york`).

3. **Normalize the photos in `originals/<id>/`:**
   - Only JPEGs are supported. Check with `file`, not the extension. Convert
     HEIC/PNG with `sips -s format jpeg in.heic --out in.jpg` and remove the source only
     after the conversion succeeds. Lower-case `.JPG`/`.jpeg` to `.jpg`.
   - Rename to two-digit sequence `01.jpg`, `02.jpg`, … preserving the existing order
     (sort numerically, so `2` comes before `10`). Use `001.jpg` only if a trip has >99.
   - Skip non-images such as `.DS_Store`.

4. **Generate web copies:** `scripts/resize.sh`. It only processes missing outputs, so if you
   renumbered photos of an *existing* trip, first delete `assets/img/<id>/` and `assets/thumbs/<id>/`.

5. **Add or update the `albums` entry.** Keep the list newest first. Label style is
   `"<Place> '<yy>"` (e.g. `"New York '24"`); use the place's proper spelling and
   capitalization. When several trips share a year and their order is unknown, ask the
   user or say in the summary where you put them.

6. **Verify** every expected file exists:
   ```bash
   bash -c 'for id in <ids>; do n=<count>; for i in $(seq -f %02g 1 $n); do
     for d in assets/img assets/thumbs; do [ -f "$d/$id/$i.jpg" ] || echo "MISSING $d/$id/$i.jpg"; done; done; done'
   ```
   For a visual check, screenshot the trip with headless Chrome:
   ```bash
   "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --disable-gpu \
     --window-size=1400,900 --allow-file-access-from-files --virtual-time-budget=8000 \
     --screenshot=<scratchpad>/trip.png "file://$PWD/index.html#<id>"
   ```

7. **Don't commit or push** unless asked. When committing, stage `assets/` and
   any `index.html` change; `originals/` stays untracked.
