# Om mig – Marika Lundell

Jag valde att hålla min portfolio enkel och avskalad, med fokus på tydlig
struktur och ett personligt uttryck. Här har jag samlat lite om mig, mina
intressen, erfarenheter och studier samt de tekniker och verktyg jag använder.

## Innehåll

- Om mig och mina intressen
- Erfarenheter och studier
- Skills och verktyg
- Kontaktuppgifter

## Design och innehåll

Jag ville skapa en sida som känns personlig och är enkel att följa.
Därför har innehållet delats upp i tydliga sektioner med återkommande
färger, typsnitt och rubrikstilar.

Som en extra detalj lade jag till animerad rök på designkortet.
Röken är ritad med SVG och animeras med CSS. Jag ville ge kortet
lite liv och låta mitt intresse för visuell design synas i själva sidan.
Röken är dekorativ och dold för skärmläsare.

## Interaktioner

- Intressekorten öppnas vid klick och visar en kort beskrivning.
  Det valda kortet förstoras. Klickar man igen stängs det,
  och öppnar man ett annat kort stängs det tidigare.
- En knapp vid mejladressen kopierar adressen till urklipp.
  Knappens ikon byts till en bock vid klick.

JavaScript hanterar klicken med `addEventListener` och växlar
klassen `active` på intressekorten. CSS styr hur korten ändrar
utseende och hur beskrivningarna visas.

## Tillgänglighet och responsivitet

Jag har använt semantiska HTML-element, en `h1` och rubriker
i logisk ordning. Klickbara element är länkar eller knappar.

Bilder som bär innehåll har alt-text. Dekorativa bilder har
tom alt-text, och knappar med enbart en ikon har ett beskrivande namn.

Sidan kan navigeras med tangentbord och har synliga fokusmarkeringar.
Intressekorten uppdaterar `aria-expanded` för att ange om de är
öppna eller stängda.

Layouten anpassas till olika skärmbredder. På mindre skärmar
staplas innehållet och avstånden justeras.

## Hitta i koden

- `index.html` – sidans innehåll och struktur.
- `style.css` – sidans utseende, animationer och responsiva anpassningar.
- `script.js` – funktionerna för intressekorten och kopiering av mejladressen.
- `images/` – bilder och ikoner, med verktygsikoner i undermappen `tools`.