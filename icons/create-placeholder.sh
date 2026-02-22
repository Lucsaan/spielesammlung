#!/bin/bash
# Erstelle ein einfaches farbiges Rechteck als Placeholder
for size in 72 96 128 144 152 192 384 512; do
  # Erstelle ein einfaches farbiges PNG mit ImageMagick (falls verfügbar)
  # Fallback: Nutze Python PIL
  python3 << PYTHON
from PIL import Image, ImageDraw, ImageFont
import os

size = $size
img = Image.new('RGB', (size, size), color='#FF6B35')
draw = ImageDraw.Draw(img)

# Zeichne einen Kreis
draw.ellipse([10, 10, size-10, size-10], fill='#FF6FA8')

# Speichere
img.save(f'icon-{size}.png')
print(f'✅ icon-{size}.png erstellt')
PYTHON
done
