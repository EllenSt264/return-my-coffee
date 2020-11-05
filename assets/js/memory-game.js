const cards = document.querySelectorAll(".memory-card");

cards.forEach((card)=> {
    card.addEventListener("click", function() {
        card.classList.toggle("flip");
    })
})