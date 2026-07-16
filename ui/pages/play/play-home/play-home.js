document.addEventListener("DOMContentLoaded", () => {

    loadGamesHome();

});

async function loadGamesHome() {

    const app = document.getElementById("app");

    if (!app) return;

    app.innerHTML = await loadHTML(
        "ui/pages/play/play-home/play-home.html"
    );

    await loadSection(
        "games-search",
        "ui/pages/play/search/search.html"
    );

    await loadSection(
        "games-categories",
        "ui/pages/play/categories/categories.html"
    );

    await loadSection(
        "games-featured",
        "ui/pages/play/featured-games/featured-games.html"
    );

    renderFeaturedGames();

}

async function loadSection(id, file) {

    const element = document.getElementById(id);

    if (!element) return;

    element.innerHTML = await loadHTML(file);

}
