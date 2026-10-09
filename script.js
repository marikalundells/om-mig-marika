// INTRESSEKORT

// Hämtar alla intressekort från HTML
const interestCards = document.querySelectorAll(".interest-card");

// Går igenom alla intressekort ett i taget
interestCards.forEach(function (card) {

    // Anger för skärmläsare att kortets innehåll är stängt
    card.setAttribute("aria-expanded", "false");

    // Lyssnar efter klick på kortet
    card.addEventListener("click", function () {

        // Stänger kortet om det redan är öppet
        if (card.classList.contains("active")) {
            card.classList.remove("active");
            card.setAttribute("aria-expanded", "false");

        } else {
            // Stänger alla kort innan det valda öppnas
            interestCards.forEach(function (otherCard) {
                otherCard.classList.remove("active");
                otherCard.setAttribute("aria-expanded", "false");
            });

            // Öppnar kortet och låter CSS förstora det och visa texten
            card.classList.add("active");
            card.setAttribute("aria-expanded", "true");
        }
    });
});



// KOPIERA MEJLADRESS

// Hämtar kopieringsknappen från HTML
const copyEmailButton = document.querySelector(".copy-email");

// Sparar ikonen så att den kan sättas tillbaka efter check-bocken
const copyEmailIcon = copyEmailButton.innerHTML;

// Sparar timern som byter tillbaka ikonen, så den kan stoppas vid nytt klick
let copyEmailTimeout;

copyEmailButton.addEventListener("click", async function () {

    // try försöker utföra kopieringen. catch hanterar fel om den misslyckas
    try {
        // async gör att vi kan använda await för att vänta tills mejladressen har kopierats
        await navigator.clipboard.writeText("marika.lundell@studentchasacademy.se");

        // Stoppar den tidigare timern om man klickar igen
        clearTimeout(copyEmailTimeout);

        // Visar en bock och uppdaterar texten för skärmläsare
        copyEmailButton.textContent = "✓";
        copyEmailButton.setAttribute("aria-label", "Mejladress kopierad");

        // Byter tillbaka till ikonen efter 1,5 sekunder
        copyEmailTimeout = setTimeout(function () {
            copyEmailButton.innerHTML = copyEmailIcon;
            copyEmailButton.setAttribute("aria-label", "Kopiera mejladress");
        }, 1500);

    } catch {
        // Visar ett meddelande om kopieringen misslyckas
        alert("Det gick inte att kopiera. Markera och kopiera mejladressen manuellt.");
    }
});



// LJUST OCH MÖRKT TEMA

// Hämtar temaknappen och ikonen i den
const themeToggle = document.querySelector(".theme-toggle");
const themeIcon = themeToggle.querySelector("span");

// Lyssnar efter klick på temaknappen
themeToggle.addEventListener("click", function () {

    // Lägger till klassen dark-mode om den saknas och tar bort den om den finns
    document.body.classList.toggle("dark-mode");

    // Kontrollerar om mörkt tema är aktiverat
    if (document.body.classList.contains("dark-mode")) {

        // Visar solen och anger att mörkt tema är aktiverat
        themeIcon.textContent = "☀";
        themeToggle.setAttribute("aria-pressed", "true");

    } else {

        // Visar månen och anger att mörkt tema är avaktiverat
        themeIcon.textContent = "☾";
        themeToggle.setAttribute("aria-pressed", "false");
    }
});