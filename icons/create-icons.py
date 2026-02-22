#!/usr/bin/env python3
"""Erstelle einfache Placeholder-Icons"""

sizes = [72, 96, 128, 144, 152, 192, 384, 512]

# SVG-Template für Icon
svg_template = '''<svg width="{size}" height="{size}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#FF6B35;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#FF6FA8;stop-opacity:1" />
    </linearGradient>
  </defs>
  <circle cx="{center}" cy="{center}" r="{radius}" fill="url(#bg)"/>
  <text x="50%" y="50%" font-size="{emoji_size}" text-anchor="middle" dominant-baseline="central">🎮</text>
</svg>'''

for size in sizes:
    center = size // 2
    radius = size // 2 - 5
    emoji_size = size // 2
    
    svg = svg_template.format(size=size, center=center, radius=radius, emoji_size=emoji_size)
    
    filename = f'icon-{size}.svg'
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(svg)
    
    print(f'✅ {filename} erstellt')

print('\n🎉 Alle Icon-SVGs erstellt!')
print('💡 Tipp: Für bessere Icons später generate-icons.html nutzen')
