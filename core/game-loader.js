function loadGame(game){

    const screen =
        document.querySelector(".game-screen");

    if(!screen) return;

    screen.innerHTML = `

<iframe
    id="game-frame"
    src="${game.gamePath}"
    title="${game.title}"
    allowfullscreen>

</iframe>

`;

    connectExitButton();

}
