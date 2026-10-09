# Om mig – Marika Lundell

En personlig portfolio där jag presenterar mig, mina intressen, erfarenheter och studier. Sidan är för alla som vill lära känna mig och följa min resa inom UX, design och utveckling. Portfolion är också en grund för att visa upp projekt jag skapar under utbildningen.

Byggd med HTML, CSS och JavaScript, utan ramverk.

## Design och innehåll

Minimalistisk stil med tydliga sektioner, personliga bilder och ljusa och mörka kontraster. Typsnitt och mellanrum skiljer innehållet åt och gör sidan lätt att följa.

## Funktioner och JavaScript

Tre interaktiva funktioner med klickhändelser kopplade genom `addEventListener`.

### Intressekort

Ett klick förstorar kortet och visar en beskrivning. Nästa klick stänger kortet. Öppnas ett annat kort stängs det tidigare.

`if...else` kontrollerar läget och klassen `active` läggs till eller tas bort. CSS styr rörelsen, förstoringen och textens synlighet.

### Kopiera mejladress

Knappen kopierar mejladressen och visar en bock vid lyckad kopiering. Ikonen återställs efter cirka 1,5 sekunder. Vid fel visas ett meddelande.

`async` och `await` inväntar kopieringen och `try...catch` hanterar fel. `setTimeout` återställer ikonen. `clearTimeout` stoppar en tidigare timer efter en ny lyckad kopiering.

### Ljust och mörkt tema

`classList.toggle()` växlar klassen `dark-mode` på `body`. CSS ändrar färgerna och `if...else` byter symbol mellan sol och måne.

## Tillgänglighet och responsivitet

Semantiska HTML-element, mitt namn i en `h1` och logiska rubriknivåer underlättar navigering. Innehållsbilder har beskrivande alt-text för skärmläsare. Dekorativa bilder har tom alt-text när de inte tillför information.

Länkar och knappar kan användas med tangentbord och har fokusmarkeringar. `aria-label` ger ikonknappar namn, `aria-expanded` beskriver kortens läge och `aria-pressed` anger om mörkt tema är på. Det hjälper skärmläsaranvändare att förstå funktionerna.

På mindre skärmar staplas innehållet, menyn kan delas över flera rader och kortens förstoring minskas.

## Kodgranskning och förbättringar

Efter feedback från klasskompisar har jag:

- Förtydligat kortbildernas alt-texter och tagit bort extra `article`-element.
- Lagt till förklarande kommentarer i JavaScript.
- Ändrat kopieringsknappen så att bekräftelsen visas efter lyckad kopiering och ikonen sedan återställs.

Egna förbättringar:

- Lagt till en knapp för ljust och mörkt tema.
- Minskat kortens förstoring på mobil för bättre layout.
- Ersatt designkortets animerade rök med en färdig bild med rök och text. Det förenklade koden utan att ändra utseendet.
- Lagt till GitHub i kontaktsektionen och justerat ikonernas utseende och storlek.


## Nästa steg

Jag vill bygga vidare på den struktur och layout jag redan är nöjd med. Först vill jag göra en mockup för att testa förbättringar. Jag skulle vilja förbättra menyraden och ge några av knapparna lite mer djup med CSS. Jag vill också prova att låta intressekorten vändas vid klick med beskrivningen på baksidan. En annan idé är en liten knapp som tar användaren tillbaka till toppen av sidan, särskilt bra på mobilen. Den minimalistiska stilen vill jag behålla och fylla på portfolion med fler projekt under utbildningen.

## Projektets filer

- `index.html` – innehåll och struktur.
- `style.css` – design, teman och responsivitet.
- `script.js` – interaktiva funktioner.
- `images/` – bilder och ikoner, med verktygsikoner i `tools/`.
