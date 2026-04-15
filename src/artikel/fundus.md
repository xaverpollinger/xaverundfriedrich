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

## Research & Synthese: Methoden zur Strategie-Findung

Um unsere Annahmen zu validieren, haben wir eine qualitative Zielgruppenumfrage durchgeführt. Die Daten zeigten klar: Empfehlungen aus dem Freundeskreis besitzen die höchste Relevanz (16/21 Befragte), gleichzeitig war die Ablehnung von gesponsertem Content (16/21) und der Wunsch nach echter Übersicht (15/21) signifikant.

Aus diesen Insights haben wir unsere UX-Strategie abgeleitet:

- **Value Proposition Canvas:** Zeigte uns, dass der größte Mehrwert nicht im Generieren neuer Empfehlungen liegt, sondern im reibungslosen Sammeln und gezielten Abrufen. Dies verschob unseren Produktfokus vom "Feed-Konsum" hin zu einer "Archiv-Logik".
- **Customer Journey Map:** Machte sichtbar, an welchen Touchpoints Nutzer:innen abbrechen. Die wesentlichen Drop-offs entstehen beim unstrukturierten Teilen und beim Versuch, Inhalte Wochen später wiederzufinden.
- **Service Blueprint:** Da wir manipulative Plattform-Mechaniken wie Engagement-Rankings vermeiden wollten, definierten wir klare Backstage-Regeln. So ist beispielsweise Teilen technisch vom Speichern entkoppelt (Privacy by Default).

## Prototyping: Von Edge Cases zu Seamless Flows

In der Konzeptionsphase haben wir auf Basis spezifischer User Personas und Szenarien Kernabläufe in Lo-Fi-Wireframes getestet und iteriert:

- **Frictionless Saving (Persona Susi):** Der Test zeigte, dass das manuelle Ausfüllen von Metadaten beim Speichern zu hohe kognitive Reibung erzeugt. Als Lösung integrierten wir einen automatisierten URL-Import, der Bild, Titel und Quelle selbstständig zieht.
- **Retrieval (Persona Jonas):** Für eine pragmatische Nutzung brauchte es extrem schnelle Filter. Wir implementierten eine Inline-Tag-Suche und einen strikten Zeit-Filter (neueste zuerst), um die "Search vs. Algorithm"-Problematik aufzulösen.
- **The Empty State (Persona Aylin):** Ohne algorithmischen Feed drohte neuen Nutzer:innen ein kalter Start. Um diesen zu überwinden, konzipierten wir Onboarding-Flows, die den Import bestehender Bookmarks aus anderen Systemen erlauben.

[xf:text-bild-a bild="fundus/fundus-placeholder.png" h="2" headline="UI & Visual Design: Form follows Purpose" text="Im Visual Design haben wir aktuelle UI-Trends kritisch evaluiert. Ein exploriertes Liquid-Glass-/Neomorphism-Design wurde bewusst verworfen, da es visuell zu nah an den datengetriebenen Plattformen lag, von denen wir uns differenzieren wollten. Stattdessen entwickelten wir ein Interface, das auf visueller Ruhe basiert: Empfehlungen werden als eigenständige Objekte (Spielkarten-Metapher) behandelt. Ein warmer Off-White-Ton mit neongrünem Akzent schafft eine klare Identität ohne visuelle Reizüberflutung."]

## Business Integration: UX bis ins Geschäftsmodell

Als Service Designer wissen wir, dass sich das Geschäftsmodell direkt auf die User Experience auswirkt. Um den "Gratis-Kultur"-Dark-Patterns aus dem Weg zu gehen, haben wir ein dreistufiges, transparentes Preismodell (Free, Plus, Lifetime) kalkuliert. Ein Planspiel (155.000 € Kapitalbedarf, Break-Even bei 4.500 Abos) validierte, dass der Service rein durch seinen funktionalen Mehrwert und ohne den Verkauf von Nutzerdaten operieren kann.
