function createGameCard(game){

    return `

<article
class="game-card"
data-id="${game.id}"
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

async function renderFeaturedGames(filter = ""){

    const games = await getGames();

    const grid =
        document.getElementById(
            "featured-games-grid"
        );

    if(!grid) return;

    const keyword =
        filter.toLowerCase();

    const filtered =
        games.filter(game => {

            return game.status === "published"

            && game.title
            .toLowerCase()
            .includes(keyword);

        });

    grid.innerHTML =
        filtered
        .map(createGameCard)
        .join("");

}
