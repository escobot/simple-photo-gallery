#!/bin/sh
# Builds web-sized images from originals/ (macOS sips, no dependencies):
#   assets/img/    max 2400px, quality 80 — opened in the lightbox
#   assets/thumbs/ max 800px,  quality 70 — shown in the grid
# Skips files already generated; delete an output to regenerate it.
set -e
cd "$(dirname "$0")/.."  # repo root

for src in originals/*/*.jpg; do
  rel="${src#originals/}"
  for spec in "img 2400 80" "thumbs 800 70"; do
    set -- $spec
    out="assets/$1/$rel"
    [ -f "$out" ] && continue
    mkdir -p "$(dirname "$out")"
    # sips -Z upscales, so copy images that are already small enough
    max=$(sips -g pixelWidth -g pixelHeight "$src" | awk '/pixel/{if ($2>m) m=$2} END{print m}')
    if [ "$max" -le "$2" ]; then
      cp "$src" "$out"
    else
      sips -Z "$2" -s formatOptions "$3" "$src" --out "$out" >/dev/null
    fi
    echo "$out"
  done
done
