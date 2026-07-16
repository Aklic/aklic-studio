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
