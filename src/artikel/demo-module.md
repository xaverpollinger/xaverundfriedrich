---
typ: projekt
title: Demo Modulübersicht
description: Dieses Beispielprojekt zeigt alle verfügbaren Content-Module im Zusammenspiel. Jedes Modul ist über einfache Markdown-Shortcodes steuerbar und lässt sich frei kombinieren.
year: 2026
role: Konzept, UX/UI Design
tags:
  - Module
  - Demo
  - Shortcodes
  - Layout
cover: /assets/images/demo/demo-cover.png
---

[xf:summary aufgabe="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris." idee="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." prozess="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo." ergebnis="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."]

## Headline + Text

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

### Unter-Überschrift H3

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.

## Bild + Bildunterschrift

[xf:bild src="demo/placeholder-1.png" alt="Beispielbild im Querformat" caption="Enim qui commodo laborum ex occaecat tempor officia qui. Mollit labore adipisicing qui consequat enim cillum sit incididunt elit dolor in ad ea."]

## Text-Bild A: Text links, Bild rechts

[xf:text-bild-a bild="demo/placeholder-1.png" h="3" headline="Form follows Purpose" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."]

## Text-Bild B: Bild links, Text rechts

[xf:text-bild-b bild="demo/placeholder-2.png" h="3" headline="Visuelle Reduktion" text="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis."]

## Bildslider

[xf:slider bilder="demo/placeholder-1.png, demo/placeholder-2.png, demo/placeholder-3.png" caption="Non labore et duis qui enim ex fugiat incididunt minim est. Drei Ansichten des Interface-Konzepts im Vergleich."]

## Highlight Link

[xf:link url="https://example.com" text="Zum vollständigen Prototyp" label="öffnen"]

## Video Embed

[xf:video url="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ"]

## Weitere Kombinationen

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.

[xf:bild src="demo/placeholder-2.png" alt="Breitformat-Ansicht"]

Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.

[xf:text-bild-a bild="demo/placeholder-3.png" h="2" headline="Modul mit H2" text="Dieses Text-Bild-Modul verwendet eine H2-Überschrift statt H3. Das Heading-Level ist frei wählbar über das h-Attribut im Markdown-Shortcode."]

[xf:link url="https://example.com" text="Projektdokumentation einsehen" label="PDF laden"]
