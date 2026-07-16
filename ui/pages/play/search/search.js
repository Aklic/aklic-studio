document.addEventListener("DOMContentLoaded", () => {

    const input = document.getElementById("game-search");

    if(!input) return;

    input.addEventListener("input", () => {

        renderFeaturedGames(input.value);

    });

});
