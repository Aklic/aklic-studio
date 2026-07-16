document.addEventListener("DOMContentLoaded", () => {

    document.addEventListener("click", event => {

        if(!event.target.classList.contains("category-btn")){

            return;

        }

        document
            .querySelectorAll(".category-btn")
            .forEach(button=>{

                button.classList.remove("active");

            });

        event.target.classList.add("active");

        currentCategory =
            event.target.textContent.trim();

        renderGames();

    });

});
