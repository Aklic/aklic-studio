document.addEventListener("DOMContentLoaded", () => {

    loadHTML("ui/layout/footer/footer.html")

    .then(html => {

        const footer =
            document.getElementById("footer");

        if(footer){

            footer.innerHTML = html;

        }

    });

});
