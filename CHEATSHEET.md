# xaverfriedrich.de — Cheatsheet

Alle Content-Module, Markdown-Syntax und Typografie-Tokens auf einen Blick.

---

## Typografie

### Schrift

| Token | Wert | Verwendung |
|---|---|---|
| `--font` | Tabular (Variable Font) | Alles |
| `--weight-light` | 300 | Fließtext, Metadaten |
| `--weight-regular` | 400 | Standard |
| `--weight-medium` | 500 | Headings, Labels |

### Typo-Staffelung

| Stufe | Token | Größe | Gewicht | Stil | Verwendung |
|---|---|---|---|---|---|
| **H1** | `--type-h1` | clamp(2rem → 3.5rem) | Medium | Italic | Seitentitel, Hero |
| **H2** | `--type-h2` | clamp(1.375rem → 2.25rem) | Medium | Italic | Hauptabschnitte |
| **H3** | `--type-h3` | clamp(1.125rem → 1.5rem) | Medium | Italic | Unterabschnitte |
| **H4** | — | 1.25rem | Medium | Normal | Inline-Labels |
| **p-m-bold** | `--type-p-m-bold` | 1.25rem | Medium | Italic | Leads, Intro-Text |
| **p-m** | `--type-p-m` | 1rem | Regular | Normal | Standard-Fließtext |
| **p-s** | `--type-p-s` | 1rem | Regular | Normal | Sekundärer Text |
| **p-xs** | `--type-p-xs` | 0.875rem | Light | Italic | Captions, Metadaten |

### Zeilenhöhen

| Token | Wert | Verwendung |
|---|---|---|
| `--line-height-tight` | 1.1 | H1–H3 |
| `--line-height-snug` | 1.3 | H4, Leads |
| `--line-height-base` | 1.6 | Fließtext |
| `--line-height-loose` | 1.8 | Lange Artikel |

### Farben

| Token | Wert | Verwendung |
|---|---|---|
| `--color-fg` | `#0d0d0d` | Haupttext |
| `--color-fg-muted` | `#6b6b6b` | Captions, Metadaten |
| `--color-border` | `#e8e8e8` | Trennlinien, Tags |

---

## Markdown: Headings

Headings direkt in Markdown — ohne Shortcode.

```markdown
# H1 — Seitentitel
## H2 — Hauptabschnitt
### H3 — Unterabschnitt
#### H4 — Inline-Label (kursiv fett, läuft im Fließtext)
```

> H1 im Artikel-Body nur sparsam — der Projekttitel ist bereits H1 im Hero.

---

## Module (Shortcodes)

### xf:summary

Tab-Navigation für Projektübersicht. Alle vier Felder optional.

```markdown
[xf:summary
  aufgabe="Beschreibung der Aufgabenstellung..."
  idee="Die zentrale Idee des Projekts..."
  prozess="Wie wurde vorgegangen..."
  ergebnis="Was ist dabei entstanden..."
]
```

| Attribut | Pflicht | Beschreibung |
|---|---|---|
| `aufgabe` | nein | Tab „Aufgabe" |
| `idee` | nein | Tab „Idee" |
| `prozess` | nein | Tab „Prozess" |
| `ergebnis` | nein | Tab „Ergebnis" |

---

### xf:heading

Zweistufige Überschrift: kleines Eyebrow-Label oben, große Hauptüberschrift unten. Ersetzt das `## Label: Titel`-Muster.

```markdown
[xf:heading label="Research & Synthese" title="Methoden zur Strategie-Findung"]
[xf:heading h="3" label="Sub-Bereich" title="Ausführlicherer Titel"]
```

| Attribut | Pflicht | Beschreibung |
|---|---|---|
| `label` | ja | Kleines Eyebrow-Label oben (p-xs, light italic, muted) |
| `title` | ja | Hauptüberschrift unten (h2-Größe, medium italic) |
| `h` | nein | Heading-Level `1`–`6` (default: `2`) |

> Verhält sich im Seitenfluss wie eine normale `h2`-Überschrift: großer Abstand davor, enger Abstand zum nachfolgenden Inhalt.

---

### xf:video

DSGVO-konformer YouTube-Embed (2-Klick-Consent).

```markdown
[xf:video url="https://www.youtube-nocookie.com/embed/VIDEO_ID"]
```

| Attribut | Pflicht | Beschreibung |
|---|---|---|
| `url` | ja | YouTube nocookie Embed-URL |

> URL-Format: `https://www.youtube-nocookie.com/embed/ID`
> Aus regulärer URL: `youtu.be/ID` → ID entnehmen

---

### xf:bild

Einzelbild, volle Breite. Optional mit Bildunterschrift.

```markdown
[xf:bild src="ordner/bild.webp"]
[xf:bild src="ordner/bild.webp" alt="Beschreibung für Screenreader"]
[xf:bild src="ordner/bild.webp" alt="Beschreibung" caption="Bildunterschrift in p-xs"]
```

| Attribut | Pflicht | Beschreibung |
|---|---|---|
| `src` | ja | Pfad relativ zu `/assets/images/` |
| `alt` | empfohlen | Alt-Text für Accessibility |
| `caption` | nein | Bildunterschrift (p-xs, Light Italic, muted) |

---

### xf:bild-duo

Zwei Bilder nebeneinander (50/50). Auf Mobile untereinander.

```markdown
[xf:bild-duo links="ordner/a.webp" rechts="ordner/b.webp"]
```

| Attribut | Pflicht | Beschreibung |
|---|---|---|
| `links` | ja | Pfad linkes Bild |
| `rechts` | ja | Pfad rechtes Bild |

---

### xf:slider

Bildslider mit Linien-Navigation und optionaler Bildunterschrift. Alle Slides haben festes **16:9-Format** — Bilder werden mittig zugeschnitten.

```markdown
[xf:slider bilder="ordner/a.webp, ordner/b.webp, ordner/c.webp"]
[xf:slider bilder="ordner/a.webp, ordner/b.webp" caption="Beschreibung der Bildreihe"]
```

| Attribut | Pflicht | Beschreibung |
|---|---|---|
| `bilder` | ja | Kommagetrennte Bildpfade |
| `caption` | nein | Bildunterschrift unter den Indikatoren |

> Empfehlung: Bilder im **16:9-Querformat** hochladen.
> Andere Formate werden per `object-fit: cover` zugeschnitten.

---

### xf:text-bild-a / xf:text-bild-b

Zweispaltiges Modul: Text + Bild.
- **A** = Text links, Bild rechts
- **B** = Bild links, Text rechts

```markdown
[xf:text-bild-a bild="ordner/bild.webp" headline="Überschrift" text="Fließtext..."]
[xf:text-bild-b bild="ordner/bild.webp" headline="Überschrift" text="Fließtext..."]

[xf:text-bild-a bild="ordner/bild.webp" h="3" headline="H3 Überschrift" text="Text..."]
```

| Attribut | Pflicht | Beschreibung |
|---|---|---|
| `bild` | ja | Pfad relativ zu `/assets/images/` |
| `headline` | nein | Überschriftstext |
| `h` | nein | Heading-Level `1`–`6` (default: `2`) |
| `text` | nein | Fließtext |
| `alt` | nein | Alt-Text für das Bild |

---

### xf:link

Highlight-Link: Beschreibungstext — Linie — Button.

```markdown
[xf:link url="https://example.com" text="Beschreibungstext" label="öffnen"]
```

| Attribut | Pflicht | Beschreibung |
|---|---|---|
| `url` | ja | Ziel-URL (öffnet in neuem Tab) |
| `text` | nein | Beschriftung links (p-m-bold) |
| `label` | nein | Button-Text rechts (default: `Link`) |

---

### xf:callout

Hervorgehobenes Zitat oder Kernaussage.

```markdown
[xf:callout text="Dies ist eine zentrale Aussage oder ein Zitat das hervorgehoben werden soll."]
```

| Attribut | Pflicht | Beschreibung |
|---|---|---|
| `text` | ja | Zitattext (H3-Größe, Medium Italic) |

---

## Heading-Level `h=` — Übersicht

Das `h`-Attribut steuert bei Modulen mit `headline` das Heading-Level:

```markdown
h="1"  →  <h1>  Größte Stufe, sparsam einsetzen
h="2"  →  <h2>  Standard-Sektionsüberschrift (default)
h="3"  →  <h3>  Unterabschnitt
h="4"  →  <h4>  Inline-Label
h="5"  →  <h5>
h="6"  →  <h6>  Kleinste Stufe
```

Verfügbar bei: `xf:text-bild-a`, `xf:text-bild-b`

---

## Bilder: Pfade & Formate

Alle Bildpfade sind **relativ zu `/assets/images/`**:

```markdown
src="demo/bild.webp"           →  /assets/images/demo/bild.webp
src="fundus/cover.webp"        →  /assets/images/fundus/cover.webp
src="intentional-os/ui-01.webp"
```

**Empfohlene Formate:** `.webp` (bevorzugt), `.jpg`, `.png`
**Empfohlene Verhältnisse:**
- Slider & Vollbild: **16:9**
- Text-Bild: **4:3** oder **1:1**

---

## Abstands-Logik im Artikel

Module (`xf:*`) und Textfluss werden unterschiedlich behandelt. Alle `xf:*`-Blöcke tragen intern die Klasse `xf-block` — darüber steuert das CSS automatisch die richtigen Abstände.

### Textfluss (p, ul, ol zusammengehörig)

| Situation | Abstand |
|---|---|
| `p → p`, `p → ul`, `ul → p` | 16px — Fließtext eng |
| `h2 → *` | 16px — nah am Inhalt |
| `h3 → *` | 12px — nah am Inhalt |

### Sektionsbrüche (Überschriften)

| Situation | Abstand |
|---|---|
| `* → h2` | 128px — neuer Hauptabschnitt |
| `* → h3` | 96px — neuer Unterabschnitt |

### Module (`xf-block`)

| Situation | Abstand |
|---|---|
| `Text → Modul` | 96px — Modul bekommt Luft |
| `Modul → Text` | 96px — Modul bekommt Luft |
| `Modul → h2` | 128px — Sektionsbruch hat Vorrang |
| `Modul → h3` | 96px — Sektionsbruch hat Vorrang |

> **Faustregel:** Zusammengehöriger Text fließt eng. Sobald ein Modul oder eine neue Überschrift folgt, entsteht automatisch Abstand.

### Spacing-Tokens (Referenz)

| Token | px | Verwendung |
|---|---|---|
| `--space-3` | 12px | Caption-Margin, H3 → Inhalt |
| `--space-4` | 16px | p+p, H2 → Inhalt |
| `--space-8` | 32px | Slider-Indikator-Gap |
| `--space-24` | 96px | Vor/nach Modulen, vor H3 |
| `--space-32` | 128px | Vor H2 (Sektionsbruch) |
