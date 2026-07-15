document.addEventListener("DOMContentLoaded", () => {

    loadHTML("ui/layout/navigation/navigation.html")

    .then(html => {

        const navigation =
            document.getElementById("navigation");

        if(navigation){

            navigation.innerHTML = html;

        }

    });

});
