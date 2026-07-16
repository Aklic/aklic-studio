function createGameCard(game){

    return `

<article
class="game-card"
onclick="location.href='game.html?id=${game.id}'">

    <div class="game-thumbnail">

        <img
        src="${game.thumbnail}"
        alt="${game.title}">

    </div>

    <div class="game-content">

        <h3 class="game-title">

            ${game.title}

        </h3>

        <span class="play-link">

            ▶ Play Game

        </span>

    </div>

</article>

`;

}

async function renderFeaturedGames(){

    const games =
    await getGames();

    const grid =
    document.getElementById(
        "featured-games-grid"
    );

    if(!grid) return;

    grid.innerHTML =
    games
    .filter(game=>game.status==="published")
    .map(createGameCard)
    .join("");

}
