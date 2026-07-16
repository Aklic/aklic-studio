function enterFullscreen(){

    const element =
        document.documentElement;

    if(element.requestFullscreen){

        element.requestFullscreen();

    }

}
