function connectLauncherButtons(){

    const startButton =
        document.getElementById("start-game-btn");

    const fullscreenButton =
        document.getElementById("fullscreen-btn");

    if(startButton){

        startButton.onclick = () => {

            loadPlayer(window.currentGame);

        };

    }

    if(fullscreenButton){

        fullscreenButton.onclick = () => {

            enterFullscreen();

        };

    }

}

function connectExitButton(){

    const exitButton =
        document.getElementById("exit-game");

    if(!exitButton) return;

    exitButton.onclick = () => {

        const leave = confirm(
            "Are you sure you want to leave this game?"
        );

        if(leave){

            exitFullscreen();

            loadLauncher(window.currentGame);

        }

    };

}
