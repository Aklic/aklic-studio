function fillGameDetails(game){

    document.getElementById("game-banner").src =
        game.banner;

    document.getElementById("game-title").textContent =
        game.title;

    document.getElementById("game-badge").textContent =
        game.badge;

    document.getElementById("game-description").textContent =
        game.fullDescription;

    const controls =
        document.getElementById("game-controls");

    controls.innerHTML = "";

    Object.entries(game.controls).forEach(([key,value])=>{

        controls.innerHTML += `

<div class="control-item">

<b>${key}</b>: ${value}

</div>

`;

    });

}

function connectStartButton(){

    const button =
        document.getElementById("play-game-btn");

    if(!button) return;

    button.onclick = () => {

        loadLauncher(window.currentGame);

    };

}
