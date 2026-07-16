document.addEventListener("DOMContentLoaded", () => {

    loadHome();

});

async function loadHome(){

    const app = document.getElementById("app");

    if(!app) return;

    app.innerHTML = await loadHTML(
        "ui/pages/home/home.html"
    );

    await loadSection(
        "hero",
        "ui/pages/home/hero/hero.html"
    );

    await loadSection(
        "featured-games",
        "ui/pages/home/featured-games/featured-games.html"
    );

    renderFeaturedGames();

    await loadSection(
        "studio-preview",
        "ui/pages/home/studio-preview/studio-preview.html"
    );

    await loadSection(
        "how-it-works",
        "ui/pages/home/how-it-works/how-it-works.html"
    );

    await loadSection(
        "why-aklic",
        "ui/pages/home/why-aklic/why-aklic.html"
    );

    await loadSection(
        "who-uses",
        "ui/pages/home/who-uses/who-uses.html"
    );

    await loadSection(
        "aklic-at-a-glance",
        "ui/pages/home/aklic-at-a-glance/aklic-at-a-glance.html"
    );

}

async function loadSection(id,file){

    const element = document.getElementById(id);

    if(!element) return;

    element.innerHTML = await loadHTML(file);

}
