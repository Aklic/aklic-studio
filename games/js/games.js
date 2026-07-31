/*
==========================================================
AKLIC STUDIO
Games Page
==========================================================
*/

"use strict";

/* ==========================================================
   DOM ELEMENTS
========================================================== */

const gamesGrid = document.getElementById("games-grid");

const searchInput = document.getElementById("game-search");

const filterButtons = document.querySelectorAll(".filter-btn");

const emptyState = document.getElementById("empty-state");


/* ==========================================================
   GLOBAL STATE
========================================================== */

let games = [];

let filteredGames = [];

let activeCategory = "all";


/* ==========================================================
   CATEGORY LABELS
========================================================== */

const categoryLabels = {

    all: "All",

    action: "Action",

    adventure: "Adventure",

    arcade: "Arcade",

    puzzle: "Puzzle",

    sports: "Sports",

    kids: "Kids"

};


/* ==========================================================
   INITIALIZE
========================================================== */

document.addEventListener("DOMContentLoaded", init);

async function init() {

    await loadGames();

    attachEvents();

}


/* ==========================================================
   LOAD GAMES
========================================================== */

async function loadGames() {

    try {

        const response = await fetch("data/games.json");

        if (!response.ok) {

            throw new Error("Unable to load games.");

        }

        games = await response.json();

        filteredGames = [...games];

        renderGames(filteredGames);

    }

    catch (error) {

        console.error(error);

        gamesGrid.innerHTML = "";

        emptyState.classList.remove("hidden");

    }

}

/* ==========================================================
   RENDER GAMES
========================================================== */

function renderGames(gameList) {

    gamesGrid.innerHTML = "";

    if (!gameList.length) {

        gamesGrid.innerHTML = "";

        emptyState.classList.remove("hidden");

        return;

    }

    emptyState.classList.add("hidden");

    const fragment = document.createDocumentFragment();

    gameList.forEach(game => {

        fragment.appendChild(createGameCard(game));

    });

    gamesGrid.appendChild(fragment);

}


/* ==========================================================
   CREATE GAME CARD
========================================================== */

function createGameCard(game) {

    const article = document.createElement("article");

    article.className = "game-card";

    article.tabIndex = 0;

    article.dataset.id = game.id;


    article.innerHTML = `

        <div class="game-thumbnail">

            <img
                src="${game.thumbnail}"
                alt="${game.title}"
                loading="lazy">

            ${game.featured ? `
                <span class="game-badge">
                    Featured
                </span>
            ` : ""}

        </div>

        <div class="game-content">

            <span class="game-category">

                ${categoryLabels[game.category]}

            </span>

            <h3 class="game-title">

                ${game.title}

            </h3>

            <p class="game-description">

                ${game.description}

            </p>

            <div class="game-play">

                <button
                    class="play-btn"
                    type="button">

                    ▶ Play Game

                </button>

            </div>

        </div>

    `;


    article.addEventListener("click", () => {

        openGame(game);

    });


    article.addEventListener("keydown", event => {

        if (
            event.key === "Enter" ||
            event.key === " "
        ) {

            event.preventDefault();

            openGame(game);

        }

    });


    return article;

}

/* ==========================================================
   OPEN GAME
========================================================== */

function openGame(game) {
  
  window.open(
    `play/index.html?id=${encodeURIComponent(game.id)}`,
    "_self"
  );

}

/* ==========================================================
   EVENT LISTENERS
========================================================== */

function attachEvents() {

    /* Search */

    searchInput.addEventListener("input", filterGames);


    /* Category Filters */

    filterButtons.forEach(button => {

        button.addEventListener("click", () => {

            activeCategory = button.dataset.category;

            updateActiveFilter(button);

            filterGames();

        });

    });

}

/* ==========================================================
   FILTER GAMES
========================================================== */

function filterGames() {

    const searchText = searchInput.value
        .trim()
        .toLowerCase();


    filteredGames = games.filter(game => {

        const matchesCategory =
            activeCategory === "all" ||
            game.category === activeCategory;


        const matchesSearch =

            game.title.toLowerCase().includes(searchText) ||

            game.description.toLowerCase().includes(searchText);


        return matchesCategory && matchesSearch;

    });


    renderGames(filteredGames);

}

/* ==========================================================
   ACTIVE FILTER
========================================================== */

function updateActiveFilter(activeButton) {

    filterButtons.forEach(button => {

        button.classList.remove("active");

    });

    activeButton.classList.add("active");

}

/* ==========================================================
   IMAGE FALLBACK
========================================================== */

function handleImageError(image) {

    image.onerror = null;

    image.src = "../assets/images/game-placeholder.webp";

    image.alt = "Game thumbnail unavailable";

}


/* ==========================================================
   LOADING PLACEHOLDERS
========================================================== */

function showLoadingCards(count = 6) {

    gamesGrid.innerHTML = "";

    const wrapper = document.createElement("div");

    wrapper.className = "games-loading";

    for (let i = 0; i < count; i++) {

        const card = document.createElement("div");

        card.className = "loading-card";

        card.innerHTML = `
            <div class="loading-thumbnail"></div>

            <div class="loading-content">

                <div class="loading-line short"></div>

                <div class="loading-line"></div>

                <div class="loading-line medium"></div>

                <div class="loading-line"></div>

            </div>
        `;

        wrapper.appendChild(card);

    }

    gamesGrid.appendChild(wrapper);

}


/* ==========================================================
   RESET SEARCH
========================================================== */

function resetSearch() {

    searchInput.value = "";

    activeCategory = "all";

    filterButtons.forEach(button => {

        button.classList.toggle(
            "active",
            button.dataset.category === "all"
        );

    });

    filteredGames = [...games];

    renderGames(filteredGames);

}


/* ==========================================================
   GET GAME BY ID
========================================================== */

function getGameById(id) {

    return games.find(game => game.id === id);

}


/* ==========================================================
   ROUTES
========================================================== */

const ROUTES = {

    play: "play/index.html"

};
