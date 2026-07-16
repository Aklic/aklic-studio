function enterFullscreen(){

    const frame =
        document.getElementById("game-frame");

    if(frame && frame.requestFullscreen){

        frame.requestFullscreen();

    }

}

function exitFullscreen(){

    if(document.fullscreenElement){

        document.exitFullscreen();

    }

}
