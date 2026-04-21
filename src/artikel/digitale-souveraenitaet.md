---
typ: projekt
title: Digitale Souveränität
description: "Eine Bachelorarbeit über digitale Souveränität: Warum Corporate Networks wie Instagram oder YouTube die Kontrolle über Identität, Daten und Sichtbarkeit strukturell bei sich behalten — und wie ein Gegenentwurf aus drei alten Web-Techniken aussehen könnte."
year: 2026
cover: /assets/images/digitale-souveraenitaet/digitale-souveraenitaet-cover.png
role: Konzept, UX Design, Research
tags:
  - Digital Sovereignty
  - Decentralization
  - RSS
  - Web Architecture
  - Surveillance Capitalism
---

[xf:summary aufgabe="Die Arbeit entstand im Rahmen der Bachelorarbeit im Studiengang Digital Media an der THU im Sommersemester 2026. Die zentrale Leitfrage: Lässt sich ein alternatives digitales System denken, das Nutzerinnen und Nutzern Kontrolle über Identität, Inhalte und Vernetzung zurückgibt — ohne auf die Funktionalität heutiger Plattformen zu verzichten?" idee="Drei Techniken, die seit Jahrzehnten Teil des Internets sind, neu kombiniert: Selfhosting gibt Kontrolle über Identität und Inhalte. RSS ermöglicht Zugang zu Inhalten ohne Plattform-Feed. Webrings schaffen Vernetzung ohne zentralen Social Graph." prozess="Theorie durcharbeiten — vor allem Shoshana Zuboffs The Age of Surveillance Capitalism als Hauptlektüre. Kernprobleme herausarbeiten. Bestehende Konzepte vergleichen und bewerten. Wireframes und Designentwürfe iterativ überarbeiten." ergebnis="Ein spekulativer Designentwurf, der zeigt: Mit bestehenden, bewährten Web-Techniken lässt sich eine souveränere Alternative zu den dominierenden Plattformen denken. Die Kombination dieser alten Techniken ergibt etwas Neues — ein erlebbares Konzept, das digitale Selbstbestimmung nicht nur verspricht, sondern als Nutzungslogik erfahrbar macht."]

[xf:link url="https://konzept.xaverfriedrich.de/" text="Konzeptwebsite und Prototyp ansehen" label="öffnen" h="2"]

## Das Problem

### Wie das Web die Kontrolle abgegeben hat

Das Internet wurde dezentral gebaut. Keine Instanz im Mittelpunkt, keine Genehmigung nötig, um mitzumachen. TCP/IP, HTTP, HTML — offene Standards, die niemandem gehören. Tim Berners-Lee verzichtete bewusst auf Patente.

Web 2.0 änderte das schrittweise. Die Idee war gut: Hürden senken, Interaktion für alle. Kein technisches Vorwissen mehr nötig. Aber die neuen Räume, die dabei entstanden, gehörten jemandem. Kommunikation, Inhalte, soziale Beziehungen — alles zog in Systeme um, deren Infrastruktur, Zugangsbedingungen und Algorithmen vollständig von einzelnen Unternehmen kontrolliert werden. Ich nenne sie in der Arbeit Corporate Networks.

Was diese Systeme so stabil hält, sind Netzwerkeffekte: Eine Plattform ist nur dann sinnvoll, wenn die eigenen Kontakte dort sind. Wer wechselt, verliert die Verbindungen. Das klingt trivial, hat aber massive strukturelle Konsequenzen. Fünf der sieben wertvollsten Unternehmen weltweit sind heute Plattformanbieter — sie vereinen rund 35 Prozent der Marktkapitalisierung der hundert wertvollsten Konzerne. Neue Mitbewerber werden übernommen, bevor sie zur echten Alternative werden. Interne E-Mails von Mark Zuckerberg, veröffentlicht im Rahmen einer Kartelluntersuchung 2020, beschreiben das offen als Strategie.

### Das Geschäftsmodell und seine Konsequenzen

Was Shoshana Zuboff in The Age of Surveillance Capitalism zeigt: Das eigentliche Produkt dieser Plattformen ist nicht der Dienst, den Nutzer verwenden. Es sind Vorhersagen über ihr Verhalten. Jede Interaktion — Klicks, Verweildauer, Suchanfragen — wird in Verhaltensdaten umgewandelt. Daraus berechnen Systeme, was Nutzer als nächstes tun werden. Dieser Zugang zu prognostiziertem Verhalten wird an Werbetreibende verkauft.

Das System stoppt nicht bei der Beobachtung. Es versucht, Verhalten aktiv zu lenken — über Interface-Design, Push-Benachrichtigungen, algorithmische Kuration. Endlose Feeds und Pull-to-Refresh funktionieren nach demselben Prinzip wie Spielautomaten: Unvorhersehbarkeit erzeugt Wiederholung. Netzwerkeffekte sorgen dafür, dass Nutzer kaum wechseln können — der Anreiz, das Produkt wirklich im Sinne der Nutzer zu verbessern, schwindet entsprechend.

Für Nutzer bedeutet das einen Verlust an Souveränität auf mehreren Ebenen: Identität und Inhalte sind an proprietäre Konten gebunden und gehören faktisch der Plattform. Wechsel ist sozial und ökonomisch teuer, solange Portabilität und Interoperabilität fehlen. Welche Inhalte sichtbar werden, entscheiden Systeme, deren Kriterien als Geschäftsgeheimnisse geschützt bleiben. Und die Regeln digitaler Teilhabe werden ohne demokratische Legitimation und ohne echte Beschwerdewege einseitig festgelegt.

[xf:bild src="digitale-souveraenitaet/mockup.png" alt="Konzept-Mockup – drei Screens der Prototyp-App"]

## Die Lösung

Der Entwurf kommt ohne neue Protokolle aus. Er kombiniert drei Techniken, die seit Jahrzehnten Teil des offenen Webs sind — und deren Stärke genau darin liegt, dass sie niemandem gehören.

**Domain** gibt Identität einen stabilen Anker außerhalb jeder Plattform. Profil, Inhalte und Archiv liegen an eigenen URLs — erreichbar über jeden Browser, unabhängig davon, welche Plattform gerade dominiert oder welche Bedingungen sich ändern. Wer die eigene Adresse besitzt, kann den Anbieter wechseln, ohne seine Internet-Identität zu verlieren.

**RSS** entkoppelt Quelle und Darstellung. Inhalte bleiben beim Urheber, der Reader ist nur eine Oberfläche. Wer abonniert, entscheidet selbst, welchen Quellen er folgt — kein Algorithmus, der diese Entscheidung abnimmt oder nach Engagement-Logik verzerrt. Abonnements sind portierbar: kein Lock-in an einen einzelnen Reader oder Anbieter.

**Ringe** lösen Entdeckung und Vernetzung ohne zentralen Social Graph. Kuratierte, öffentlich einsehbare Listen von Domains — abonnierbar wie ein Feed, exportierbar wie eine Textdatei. Soziale Verbindungen entstehen über nachvollziehbare Verweise statt über eine Black Box.

Die Kombination ergibt etwas, das keiner dieser Techniken allein gelingt: eine Nutzungslogik, die sich nach Social Media anfühlt — veröffentlichen, lesen, entdecken — aber strukturell anders funktioniert. Weniger Abhängigkeit von einzelnen Anbietern, mehr Kontrolle über das, was man aufbaut.

[xf:link url="https://konzept.xaverfriedrich.de/" text="Detaillierter Blick ins Konzept" label="öffnen" h="2"]
