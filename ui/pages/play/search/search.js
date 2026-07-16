document.addEventListener("input", event => {

    if(event.target.id !== "game-search"){

        return;

    }

    renderFeaturedGames(
        event.target.value
    );

});
