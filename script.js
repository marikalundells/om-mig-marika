const interestCards = document.querySelectorAll(".interest-card");

interestCards.forEach(function (card) {
    card.setAttribute("aria-expanded", "false");

    card.addEventListener("click", function () {
        if (card.classList.contains("active")) {
            card.classList.remove("active");
            card.setAttribute("aria-expanded", "false");
        } else {
            interestCards.forEach(function (otherCard) {
                otherCard.classList.remove("active");
                otherCard.setAttribute("aria-expanded", "false");
            });

            card.classList.add("active");
            card.setAttribute("aria-expanded", "true");
        }
    });
});


const copyEmailButton = document.querySelector(".copy-email");

copyEmailButton.addEventListener("click", function () {
    navigator.clipboard.writeText("marika.lundell@studentchasacademy.se");

    copyEmailButton.textContent = "✓";
});