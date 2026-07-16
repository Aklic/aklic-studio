fetch("ui/pages/play/game/game.html")
.then(response => response.text())
.then(html => {

    document
        .getElementById("game-page")
        .innerHTML = html;

    const id = getGameId();

    if (!id) {

        document
            .getElementById("game-view")
            .innerHTML = "<h2>Game not found.</h2>";

        return;

    }

    getGame(id)
    .then(game => {

        if (!game) {

            document
                .getElementById("game-view")
                .innerHTML = "<h2>Game not found.</h2>";

            return;

        }

        window.currentGame = game;

        loadDetails(game);

    });

});

function loadSection(file){

    return fetch(file)
        .then(response => response.text());

}

function loadDetails(game){

    loadSection(
        "ui/pages/play/game-details/details.html"
    )

    .then(html=>{

        document
            .getElementById("game-view")
            .innerHTML = html;

        fillGameDetails(game);

        connectStartButton();

    });

}

function loadLauncher(game){

    loadSection(
        "ui/pages/play/game-launcher/launcher.html"
    )

    .then(html=>{

        document
            .getElementById("game-view")
            .innerHTML = html;

        fillLauncher(game);

    });

}

function loadPlayer(game){

    loadSection(
        "ui/pages/play/player/player.html"
    )

    .then(html=>{

        document
            .getElementById("game-view")
            .innerHTML = html;

        loadGame(game);

    });

}
