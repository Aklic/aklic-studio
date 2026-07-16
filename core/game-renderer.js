let currentSearch = "";
let currentCategory = "All";

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

        <span class="game-badge">

            ${game.badge}

        </span>

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

async function renderGames(){

    const games = await getGames();

    const grid = document.getElementById("games-grid");

    if(!grid) return;

    const visibleGames = games.filter(game => {

        const searchMatch =
            game.title
            .toLowerCase()
            .includes(currentSearch.toLowerCase());

        const categoryMatch =
            currentCategory === "All"
            || game.category === currentCategory;

        return game.status === "published"
            && searchMatch
            && categoryMatch;

    });

    grid.innerHTML = visibleGames
        .map(createGameCard)
        .join("");

}
