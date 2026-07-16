function fillLauncher(game){

    document.getElementById("launcher-banner").src =
        game.banner;

    document.getElementById("launcher-title").textContent =
        game.title;

    document.getElementById("launcher-badge").textContent =
        game.badge;

    document.getElementById("launcher-description").textContent =
        game.shortDescription;

    connectLauncherButtons();

}
