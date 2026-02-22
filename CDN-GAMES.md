# 🎮 CDN-Spiele für direkte Integration

## Was sind CDN-Spiele?

CDN (Content Delivery Network) Spiele sind HTML5-Spiele, die direkt von einem Server geladen werden.

**Vorteile:**
- ✅ Keine Werbung
- ✅ Schnell ladend
- ✅ Saubere Oberfläche
- ✅ Direkt spielbar
- ✅ Können in iFrames eingebettet werden

## 🔍 Wimmelbild / Hidden Object Spiele

### HTMLGames.com CDN-Links

Muster: `https://cdn.htmlgames.com/[SpielName]/index.html?npa=1`

**Gefundene Spiele:**
- Hunting Jack - At the Train Station
  - URL: `https://cdn.htmlgames.com/HuntingJackAtTheTrainStation/index.html?npa=1`
  - Beschreibung: Versteckte Objekte am Bahnhof finden

**Weitere mögliche Spiele (zu testen):**
- HiddenObjects...
- FindObjects...
- SearchAndFind...

## 🀄 Mahjong Spiele

**Mögliche CDN-Links zu testen:**
- `https://cdn.htmlgames.com/MahjongClassic/index.html?npa=1`
- `https://cdn.htmlgames.com/MahjongSolitaire/index.html?npa=1`
- `https://cdn.htmlgames.com/MahjongConnect/index.html?npa=1`

## 🫧 Bubble Spiele

**Mögliche CDN-Links zu testen:**
- `https://cdn.htmlgames.com/BubbleShooter/index.html?npa=1`
- `https://cdn.htmlgames.com/BubbleClassic/index.html?npa=1`

## 🎯 Nächste Schritte

1. Systematisch durch HTMLGames.com gehen
2. Passende Spiel-IDs finden
3. CDN-Links testen
4. Beste Spiele in Spieleseite integrieren

## 💡 Integration-Optionen

### Option 1: Direkte Links (aktuell)
```html
<a href="https://cdn.htmlgames.com/SpielName/index.html?npa=1" target="_blank">
  Spielen
</a>
```

### Option 2: iFrame-Einbettung (später möglich)
```html
<iframe 
  src="https://cdn.htmlgames.com/SpielName/index.html?npa=1" 
  width="100%" 
  height="600px" 
  frameborder="0">
</iframe>
```

**Vorteil iFrame:** Spiel direkt auf unserer Seite, ohne neue Tabs!
