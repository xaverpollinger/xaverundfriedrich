---
typ: projekt
title: Digitale Souveränität
description: "Eine Bachelorarbeit über digitale Souveränität: Warum Corporate Networks wie Instagram oder YouTube die Kontrolle über Identität, Daten und Sichtbarkeit strukturell bei sich behalten — und wie ein Gegenentwurf aus drei alten Web-Techniken aussehen könnte."
year: 2026
role: Konzept, UX Design, Research
tags:
  - Digital Sovereignty
  - Decentralization
  - RSS
  - Web Architecture
  - Surveillance Capitalism
---

[xf:summary aufgabe="Das System verstehen. Herausfinden, an welchen konkreten Punkten Nutzer digitale Souveränität verlieren — und das in ein alternatives System übersetzen, das die Kontrolle zurückgibt." idee="Drei Techniken, die seit Jahrzehnten Teil des Internets sind, neu kombiniert: Selfhosting gibt Kontrolle über Identität und Inhalte. RSS ermöglicht Zugang zu Inhalten ohne Plattform-Feed. Webrings schaffen Vernetzung ohne zentralen Social Graph." prozess="Theorie durcharbeiten — vor allem Shoshana Zuboffs The Age of Surveillance Capitalism als Hauptlektüre. Kernprobleme herausarbeiten. Bestehende Konzepte vergleichen und bewerten. Wireframes und Designentwürfe iterativ überarbeiten." ergebnis="Ein spekulativer Designentwurf, der zeigt: Mit bestehenden, bewährten Web-Techniken lässt sich eine souveränere Alternative zu den dominierenden Plattformen denken. Die Kombination dieser alten Techniken ergibt etwas Neues — ein erlebbares Konzept, das digitale Selbstbestimmung nicht nur verspricht, sondern als Nutzungslogik erfahrbar macht."]

[xf:link url="#" text="Konzeptwebsite und Prototyp ansehen" label="öffnen"]

## Wie das Web die Kontrolle abgegeben hat

Der Ausgangspunkt der Arbeit war eigentlich eine simple Beobachtung: Ich nutze täglich Plattformen, auf denen ich inhaltlich abhängig bin von Entscheidungen, die ich weder kenne noch beeinflussen kann. Welche Beiträge erscheinen, wer meine Inhalte sieht, nach welchen Regeln mein Account gesperrt werden kann — das bestimmt jemand anderes. Und zwar strukturell, nicht aus Versehen.

Das war der Anfang. Die eigentliche Frage war dann: Wie ist das passiert, und lässt es sich anders denken?

Das Internet startete als dezentrales Kommunikationsnetz — keine Instanz im Mittelpunkt, keine Genehmigung nötig, um mitzumachen. Die Protokolle, auf denen es aufbaut, TCP/IP, HTTP, HTML, gehören niemandem. Tim Berners-Lee verzichtete bewusst auf Patente. Das offene Web war kein Unfall, sondern eine bewusste Architekturentscheidung.

Was dann folgte, war Web 2.0 — und das war zunächst wirklich Fortschritt. Keine technischen Vorkenntnisse mehr nötig, um Inhalte zu veröffentlichen. Interaktion für alle. Während des Arabischen Frühlings wurden Facebook und Twitter zu Werkzeugen politischer Mobilisierung in Ländern, in denen klassische Medien versagt hatten. Das war real.

[xf:callout text="Aber die Architektur dieser neuen Räume war eine andere. Die neuen Räume gehörten jemandem."]

## Was Corporate Networks wirklich sind

In der Arbeit nenne ich die großen sozialen Plattformen Corporate Networks. Nicht Social Media, nicht Plattformen. Der Begriff ist eine Entscheidung: Er macht sichtbar, dass Infrastruktur, Zugangsbedingungen, Schnittstellen, Algorithmen und Nutzungsbedingungen vollständig von einem einzigen Unternehmen kontrolliert werden.

Fünf der sieben wertvollsten Unternehmen der Welt sind heute Plattformanbieter — Alphabet, Amazon, Apple, Meta, Microsoft. Zusammen vereinen sie rund 35 Prozent der Marktkapitalisierung der hundert wertvollsten Konzerne weltweit. Das ist die Infrastruktur, durch die ein erheblicher Teil unserer täglichen Kommunikation läuft.

Was diese Systeme so stabil hält, sind Netzwerkeffekte: Je mehr Menschen auf einer Plattform sind, desto wertvoller wird sie für jeden Einzelnen. Ein soziales Netzwerk ist nur dann sinnvoll, wenn die eigenen Kontakte auch dort sind. Die Konsequenz davon ist weniger trivial als sie klingt: Wer wechseln will, verliert die Verbindungen. Wer bleibt, bestätigt die Dominanz. Alternativen werden strukturell benachteiligt, bevor sie überhaupt eine kritische Masse erreichen können. Neue Mitbewerber werden übernommen, bevor sie zu einer echten Alternative werden — interne E-Mails von Mark Zuckerberg, die 2020 im Rahmen einer Kartelluntersuchung veröffentlicht wurden, beschreiben das offen als Strategie.

## Das Geschäftsmodell, das dahinter steckt

Der Teil, der mich beim Durcharbeiten von Zuboffs Surveillance Capitalism am meisten beschäftigt hat, ist nicht die Überwachung an sich. Es ist die Logik, die erklärt, warum Plattformen gar keinen Anreiz haben, es anders zu machen.

Das Geschäftsmodell basiert nicht auf dem Verkauf eines Produkts an die Nutzer. Interaktionen werden erfasst — Klicks, Suchanfragen, Verweildauer — und in Verhaltensdaten umgewandelt. Ein Teil davon fließt in die Produktverbesserung. Der Rest ist das, was Zuboff Verhaltensüberschuss nennt: rohe Daten, aus denen Systeme Vorhersagen berechnen, was Nutzer als nächstes tun werden. Dieser Zugang zu prognostiziertem Verhalten wird an Werbetreibende verkauft.

Soweit ist das bekannt. Was Zuboff darüber hinaus zeigt: Das System stoppt nicht bei der Beobachtung. Es versucht, Verhalten aktiv zu beeinflussen. Über Interface-Gestaltung, Push-Benachrichtigungen, algorithmische Kuration. Endlose Feeds und Pull-to-Refresh funktionieren nach demselben Prinzip wie Spielautomaten — die Unvorhersehbarkeit der Belohnung erzeugt Wiederholung. Studien zeigen, dass rund ein Viertel junger Erwachsener soziale Medien suchtartig nutzt.

[xf:callout text="Für Plattformunternehmen bedeutet diese Konstellation, dass echte Verbesserung im Sinne der Nutzer zunehmend nachrangig wird."]

## Wo Souveränität konkret verloren geht

In der Arbeit übersetze ich das Problemfeld in vier Dimensionen, anhand derer sich messen lässt, ob ein System souveränitätsorientiert ist oder nicht. Das war einer der wichtigsten Schritte im Prozess — von einer diffusen Kritik an Plattformen zu konkreten Kriterien, die später auch als Designanforderungen taugen.

- **Kontrolle über digitale Identität und Daten:** In Corporate Networks ist die digitale Identität an ein proprietäres Konto gebunden. Follower, Reichweite, soziale Verbindungen — das alles existiert nur innerhalb des geschlossenen Systems. Es gehört nicht dem Nutzer, und der Betreiber entscheidet darüber, unter welchen Bedingungen es weiter existiert.
- **Wahlfreiheit und Wechselmöglichkeit:** Das WhatsApp-Beispiel ist hier besonders prägnant: ursprünglich explizit als Gegenmodell zu datengetriebenen Plattformen positioniert, nach der Übernahme durch Meta in ein Ökosystem integriert, dessen Geschäftslogik auf Verhaltensauswertung basiert. Fehlende Portabilität und Interoperabilität machen Wechsel zu einer sozialen und ökonomischen Entscheidung.
- **Transparenz algorithmischer Vermittlung:** Chronologische Feeds gibt es kaum noch. Welche Inhalte sichtbar werden, entscheiden Systeme, deren Kriterien als Geschäftsgeheimnisse weitgehend geschützt bleiben. Für alle, die professionell auf Plattformen publizieren, entsteht daraus ein permanenter Anpassungsdruck an vermutete Signale — ohne die eigentlichen Spielregeln zu kennen.
- **Mitbestimmung über die Regeln digitaler Teilhabe:** Plattformbetreiber legen in AGBs und Community-Standards fest, was sagbar ist und was nicht. Diese Entscheidungen beeinflussen, welche politischen Inhalte Reichweite bekommen, welche Formen der Mobilisierung begünstigt werden und welche nicht — ohne demokratische Legitimation und oft ohne nachvollziehbare Beschwerdewege.

[xf:heading label="Die Antwort" title="Alte Techniken, neu kombiniert"]

Der Entwurf kommt ohne neue Protokolle aus. Er setzt auf Techniken, die seit Jahrzehnten funktionieren — und deren offener Charakter genau das ermöglicht, was Corporate Networks strukturell verhindern.

- **Eine eigene Domain als Identitätsanker:** Profil und Inhalte sind nicht an ein Plattformkonto gebunden, sondern existieren im offenen Web — erreichbar über stabile URLs, unabhängig davon, welche Plattform gerade dominiert oder welche Bedingungen sich ändern.
- **RSS als Distributionslogik:** Inhalte bleiben bei der Quelle, Nutzer entscheiden aktiv, welchen Quellen sie folgen, ohne dass ein Algorithmus diese Entscheidung abnimmt.
- **Ringe als Vernetzungsstruktur:** Entdeckung läuft über sichtbare, exportierbare Listen von Domains — keine Black Box, keine zentrale Instanz.

Was mich an diesem Ansatz interessiert, ist nicht die Nostalgie für ein älteres Web. Es ist die Frage, ob sich die Nutzungslogiken, die wir von Social Media kennen — veröffentlichen, lesen, entdecken — mit deutlich weniger struktureller Abhängigkeit organisieren lassen. Der Entwurf ist ein Versuch, das als konkrete Nutzungserfahrung durchzudenken.

Das Ergebnis ist kein marktreifes Produkt, sondern ein spekulativer Designentwurf — ein klickbarer Prototyp, der die Logik erfahrbar macht.

[xf:link url="#" text="Konzeptwebsite und Prototyp ansehen" label="öffnen"]
