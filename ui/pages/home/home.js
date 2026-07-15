document.addEventListener("DOMContentLoaded", () => {

    loadHome();

});

async function loadHome(){

    const app = document.getElementById("app");

    if(!app) return;

    const html = await loadHTML(
        "ui/pages/home/home.html"
    );

    app.innerHTML = html;

    loadSection(
        "hero",
        "ui/pages/home/hero/hero.html"
    );

    loadSection(
        "featured-games",
        "ui/pages/home/featured-games/featured-games.html"
    );

    loadSection(
        "how-it-works",
        "ui/pages/home/how-it-works/how-it-works.html"
    );

    loadSection(
        "why-aklic",
        "ui/pages/home/why-aklic/why-aklic.html"
    );

    loadSection(
        "who-uses",
        "ui/pages/home/who-uses/who-uses.html"
    );

    loadSection(
        "studio-preview",
        "ui/pages/home/studio-preview/studio-preview.html"
    );

}

async function loadSection(id,file){

    const element = document.getElementById(id);

    if(!element) return;

    const html = await loadHTML(file);

    element.innerHTML = html;

}
