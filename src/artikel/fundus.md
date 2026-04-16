---
typ: projekt
title: Fundus
description: Plattformen leiten unseren Geschmack zunehmend aus Interaktionsdaten ab. Fundus ist unser Service-Design-Konzept für eine digitale Welt ohne Feed-Fatigue – ein Ort, der bewusste Kuration wieder in den Vordergrund rückt. Nutzerinnen und Nutzer sammeln Empfehlungen, archivieren sie und teilen sie gezielt mit ihrem Freundeskreis. Komplett ohne Reichweitenlogik, Algorithmen oder Werbeziele.
year: 2026
role: Service Design, UX/UI Design
tags:
  - Service Design
  - UX/UI Design
  - App-Konzept
  - Ethical Design
  - Kuration
  - Social Friction
  - Aufmerksamkeitsökonomie
cover: /assets/images/fundus/fundus-cover.webp
---

[xf:summary aufgabe="Das Projekt entstand im Rahmen des Moduls Service Design an der THU im Wintersemester 25/26. Aufgabe war es, ein eigenständiges Start-up-Konzept zu entwickeln. Unsere zentrale Leitfrage war, ob sich ein Service gestalten lässt, der menschlichen Geschmack wieder über algorithmische Feeds stellt." idee="Fundus bietet einen zentralen Ort für die bewusste Nutzung von Empfehlungen. Das Konzept löst das Problem der Social Friction – das Verlorengehen von Inhalten in endlosen Chat-Verläufen oder geschlossenen Plattform-Silos. Anstelle eines endlosen Feeds setzt Fundus auf eine chronologische Stapel-Interaktion für bewusstes Entdecken. Engagement-Rankings und künstliche Dauerreize haben wir komplett gestrichen." prozess="Wir sind nach dem Human-Centered-Design-Prozess vorgegangen. Value Proposition Canvas, Customer Journey Map und Service Blueprint halfen uns, emotionale Bruchstellen aufzudecken. Eine Zielgruppenumfrage validierte zentrale Annahmen. Iteratives Prototyping und mehrere Visual-Exploration-Runden – von Neomorphism über Vintage-Web bis zum Editorial-Magazin – führten schließlich zum finalen Konzept." ergebnis="Das finale Design behandelt die einzelne Empfehlung als wertiges Objekt. Eine reduzierte, kartenbasierte Oberfläche mit warmem Off-White-Ton und neongrünem Akzent schafft eine klare Identität ohne visuelle Reizüberflutung. Ein transparentes Freemium-Modell mit Free, Plus-Abo und Lifetime-Option sorgt dafür, dass sich der Service über seinen echten Mehrwert finanziert."]

[xf:video url="https://www.youtube-nocookie.com/embed/H1ShleWkaKk"]

## Informationsflut und Social Friction

Die Ausgangslage unseres Service-Design-Projekts war die zunehmende "cultural flatness" durch algorithmische Feeds. Plattformen quantifizieren Geschmack basierend auf Interaktionsdaten und optimieren auf Verweildauer. Für die Nutzer:innen resultiert daraus ein konkretes UX-Problem, das wir als "Social Friction" definiert haben:

- **Inkompatibilität:** Empfehlungen enden in geschlossenen Plattform-Silos oder Link-Sackgassen.
- **Kontextverlust:** Inhalte erreichen Nutzer:innen im falschen Moment (Mood-Mismatch) und verpuffen.
- **Retrieval-Probleme:** Das Wiederfinden scheitert am "Speicher-Chaos" in endlosen Chat-Verläufen (Chat-Gräber).

Das Ziel von Fundus war es, einen Service zu gestalten, der diesen Reibungsverlust eliminiert und menschliche Kuration in den Mittelpunkt stellt.

[xf:heading label="Research & Synthese" title="Methoden zur Strategie-Findung"]

Um unsere Annahmen zu validieren, haben wir eine qualitative Zielgruppenumfrage durchgeführt. Die Daten zeigten klar: Empfehlungen aus dem Freundeskreis besitzen die höchste Relevanz (16/21 Befragte), gleichzeitig war die Ablehnung von gesponsertem Content (16/21) und der Wunsch nach echter Übersicht (15/21) signifikant.

Aus diesen Insights haben wir unsere UX-Strategie abgeleitet:

- **Value Proposition Canvas:** Zeigte uns, dass der größte Mehrwert nicht im Generieren neuer Empfehlungen liegt, sondern im reibungslosen Sammeln und gezielten Abrufen. Dies verschob unseren Produktfokus vom "Feed-Konsum" hin zu einer "Archiv-Logik".
- **Customer Journey Map:** Machte sichtbar, an welchen Touchpoints Nutzer:innen abbrechen. Die wesentlichen Drop-offs entstehen beim unstrukturierten Teilen und beim Versuch, Inhalte Wochen später wiederzufinden.
- **Service Blueprint:** Da wir manipulative Plattform-Mechaniken wie Engagement-Rankings vermeiden wollten, definierten wir klare Backstage-Regeln. So ist beispielsweise Teilen technisch vom Speichern entkoppelt (Privacy by Default).

[xf:slider bilder="fundus/fundus-research-service-blueprint.jpg, fundus/fundus-research-customer-journey.jpg, fundus/fundus-research-value-proposition.jpg" caption="Von links: Service Blueprint, Customer Journey Map, Value Proposition Canvas"]

[xf:heading label="Prototyping" title="Von Edge Cases zu Seamless Flows"]

In der Konzeptionsphase haben wir auf Basis spezifischer User Personas und Szenarien Kernabläufe in Lo-Fi-Wireframes getestet und iteriert:

- **Frictionless Saving (Persona Susi):** Der Test zeigte, dass das manuelle Ausfüllen von Metadaten beim Speichern zu hohe kognitive Reibung erzeugt. Als Lösung integrierten wir einen automatisierten URL-Import, der Bild, Titel und Quelle selbstständig zieht.
- **Retrieval (Persona Jonas):** Für eine pragmatische Nutzung brauchte es extrem schnelle Filter. Wir implementierten eine Inline-Tag-Suche und einen strikten Zeit-Filter (neueste zuerst), um die "Search vs. Algorithm"-Problematik aufzulösen.
- **The Empty State (Persona Aylin):** Ohne algorithmischen Feed drohte neuen Nutzer:innen ein kalter Start. Um diesen zu überwinden, konzipierten wir Onboarding-Flows, die den Import bestehender Bookmarks aus anderen Systemen erlauben.

[xf:heading label="UI & Visual Design" title="Form follows Purpose"]

Jede Designentscheidung bei Fundus ist eine Positionierungsentscheidung. Das visuelle System muss kommunizieren, was der Service ist – und was er explizit nicht ist. Trending Ästhetiken wie "Liquid Glass" oder Neomorphism wurden deshalb früh verworfen: Sie sind visuell untrennbar mit den aufmerksamkeitsökonomischen Plattformen verbunden, von denen wir uns differenzieren wollen. Wer anders wirken will, muss anders aussehen.

Das Ergebnis ist ein Interface, das visuelle Ruhe als Produktversprechen begreift:

- **Karten-Logik:** Die einzelne Empfehlung wird als wertiges, greifbares Objekt behandelt – nicht als Feed-Item in einem endlosen Strom. Die Spielkarten-Metapher schafft eine haptische Qualität, die Kuration als aktiven, bewussten Akt erfahrbar macht.
- **Farbgebung & Typografie:** Ein warmer Off-White-Ton (#FBF7F7) bricht den klinischen Tech-Look. Das Neongrün (#C3FFB3) funktioniert als digitaler Textmarker – Relevanz wird manuell gesetzt, nicht algorithmisch berechnet. Fira Mono verleiht der Identität archivarischen Charakter; SF Pro hält die UI-Navigation klar und lesbar. Die Trennung ist bewusst: Identität und Funktion sprechen verschiedene Sprachen.

[xf:bild src="fundus/fundus-ui-mockup.png" alt="Fundus UI Mockup" caption="UI-Mockup: Kartenbasierte Oberfläche mit Off-White-Hintergrund und neongrünem Akzent"]

[xf:heading label="Business Integration" title="UX bis ins Geschäftsmodell"]

Ein gutes Nutzererlebnis endet nicht beim Interface, sondern schließt das Geschäftsmodell mit ein. Um typische Dark Patterns von vermeintlichen "Gratis-Apps" zu vermeiden, basiert das Konzept auf einem transparenten Preismodell (Free, Plus, Lifetime). Um zu prüfen, ob das realistisch ist, haben wir das Ganze in einem Planspiel kalkuliert: Bei einem Kapitalbedarf von 155.000 € und einem Break-Even von 4.500 Abos zeigte sich, dass sich der Service allein durch seinen Mehrwert finanzieren lässt – ganz ohne den Verkauf von Nutzerdaten.
