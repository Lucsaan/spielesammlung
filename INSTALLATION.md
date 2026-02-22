# 📱 Installation auf dem Chromebook

Diese Anleitung zeigt dir Schritt für Schritt, wie du die Spieleseite als App auf Mamas Chromebook installierst.

---

## ✅ Vorbereitung (einmalig durch dich)

### Schritt 1: Icons generieren

1. Öffne `generate-icons.html` in Chrome
2. Die Icons werden automatisch angezeigt
3. Klicke bei jedem Icon auf "Download"
4. Verschiebe alle heruntergeladenen `icon-XX.png` Dateien in den `icons/` Ordner

**Benötigte Icons:**
- icon-72.png
- icon-96.png
- icon-128.png
- icon-144.png
- icon-152.png
- icon-192.png
- icon-384.png
- icon-512.png

### Schritt 2: Dateien auf das Chromebook übertragen

**Option A: USB-Stick** (empfohlen für lokale Installation)
1. Kopiere den gesamten `SpieleSammlung` Ordner auf einen USB-Stick
2. Stecke den USB-Stick ins Chromebook
3. Öffne die "Dateien" App
4. Kopiere den Ordner in "Meine Dateien" → "Downloads"

**Option B: Online hosten** (empfohlen für beste Erfahrung)
1. Erstelle ein GitHub Repository
2. Lade alle Dateien hoch
3. Aktiviere GitHub Pages in den Repository-Einstellungen
4. Nutze die bereitgestellte URL (z.B. `https://deinname.github.io/spielesammlung`)

---

## 🚀 Installation als App (auf dem Chromebook)

### Variante A: Lokale Installation (von Festplatte)

1. **Öffne Chrome Browser** auf dem Chromebook
   
2. **Öffne die Datei**:
   - Drücke `Strg + O` (oder klicke auf Menü → "Datei öffnen")
   - Navigiere zu: `Meine Dateien` → `Downloads` → `SpieleSammlung`
   - Öffne `spieleseite.html`

3. **Installiere die App**:
   - Klicke auf das **Menü** (⋮) oben rechts
   - Wähle **"App installieren..."** oder **"Spieleseite installieren..."**
   - Bestätige mit **"Installieren"**

4. **Fertig!** 🎉
   - Die App erscheint jetzt im **App-Launcher** (Kreis-Symbol unten links)
   - Das Icon ist im **Shelf** (Taskleiste unten)

### Variante B: Online-Installation (von GitHub Pages)

1. **Öffne Chrome Browser** auf dem Chromebook

2. **Gehe zur URL**:
   ```
   https://deinname.github.io/spielesammlung/spieleseite.html
   ```

3. **Installiere die App**:
   - Klicke auf das **Menü** (⋮) oben rechts
   - Wähle **"App installieren..."**
   - Bestätige mit **"Installieren"**

4. **Fertig!** 🎉

---

## 🎮 Nutzung für Mama

### App starten
1. Klicke auf das **Kreis-Symbol** unten links (App-Launcher)
2. Suche nach **"Mamas Spieleseite"** oder **"Spiele"**
3. Klicke auf das bunte Icon
4. Die Spieleseite öffnet sich in einem eigenen Fenster!

### Spiel spielen
1. Auf der Spieleseite auf ein Spiel klicken (z.B. "Mahjong Klassisch")
2. Das Spiel öffnet sich in einem neuen Tab
3. Einfach losspielen! 🀄

### Zurück zur Spieleauswahl
- Schließe den Spiel-Tab oder klicke auf den Tab "Meine Spieleseite"

---

## 🔐 Passwörter speichern (für automatisches Login)

Damit Mama nicht jedes Mal Passwörter eingeben muss:

### Beim ersten Besuch einer Spieleseite:

1. Melde dich mit Mamas Account an
2. Chrome fragt: **"Passwort speichern?"**
3. Klicke auf **"Speichern"**
4. Ab jetzt erfolgt der Login automatisch! ✅

### Wichtig:
- Mache das für jede Spieleseite einzeln (falls Login erforderlich)
- Die meisten Spiele benötigen **kein Login** zum Spielen!
- Nur für Spiele mit Account-Features (z.B. Spielstand speichern)

---

## 🛠️ Problemlösung

### "App installieren" erscheint nicht im Menü
- ✅ Stelle sicher, dass du die Seite über `http://localhost` oder `https://` aufrufst
- ✅ Lokale `file://` URLs unterstützen PWA-Installation oft nicht
- → **Lösung**: Nutze GitHub Pages (Variante B)

### Icons werden nicht angezeigt
- ✅ Prüfe, ob alle Icons im `icons/` Ordner sind
- ✅ Öffne `generate-icons.html` und lade sie nochmal herunter

### Service Worker funktioniert nicht
- ✅ Öffne Chrome DevTools (F12)
- ✅ Gehe zu "Application" → "Service Workers"
- ✅ Prüfe, ob der Service Worker registriert ist
- → Falls nicht: Prüfe Konsole auf Fehlermeldungen

### Spiele laden nicht
- ✅ Internetverbindung prüfen
- ✅ Manche Spieleseiten benötigen stabile Verbindung
- Die Spieleseite selbst funktioniert auch offline (nur die Startseite)

---

## 📍 App deinstallieren (falls nötig)

1. **Rechtsklick** auf das App-Icon im Shelf
2. Wähle **"Deinstallieren"**
3. Bestätige mit **"Entfernen"**

---

## 💡 Tipps für optimale Nutzung

### Desktop-Verknüpfung erstellen
1. App öffnen
2. Im Chrome-Menü: **"Weitere Tools"** → **"Verknüpfung erstellen"**
3. Haken bei **"Als Fenster öffnen"** setzen
4. Jetzt gibt's ein Icon auf dem Desktop!

### Favoriten-Spiele bookmarken
- Wenn Mama bestimmte Spiele besonders mag
- Erstelle Browser-Lesezeichen für diese spezifischen Spiele
- Platziere sie in der Lesezeichen-Leiste

### Schriftgröße anpassen (falls nötig)
- In Chrome: `Strg` + `+` (größer) oder `Strg` + `-` (kleiner)
- `Strg` + `0` (zurücksetzen)

---

## 🎯 Nächste Schritte

- [ ] Icons generieren
- [ ] Auf Chromebook installieren
- [ ] Mit Mama testen
- [ ] Feedback sammeln
- [ ] Ggf. weitere Spiele hinzufügen (Bubble-Spiele etc.)

---

**Bei Fragen oder Problemen einfach melden!** 😊
