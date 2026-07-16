document.addEventListener("DOMContentLoaded", () => {

    document.addEventListener("input", event => {

        if(event.target.id !== "game-search") return;

        currentSearch = event.target.value;

        renderGames();

    });

});
