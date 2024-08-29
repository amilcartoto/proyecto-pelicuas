document.addEventListener('DOMContentLoaded', function() {
    const moviesContainer = document.getElementById("movies-container");

    tempData.forEach((movie) => {
        const card = document.createElement("div");
        card.classList.add("card");

        const title = document.createElement("h3");
        title.classList.add("card-title");
        title.innerHTML = movie.title;

        const year = document.createElement("p");
        year.classList.add("card-text");
        year.innerHTML = `Año: ${movie.year}`;

        const poster = document.createElement("img");
        poster.classList.add("card-image");
        poster.src = movie.poster;
        poster.alt = movie.title

        const button = document.createElement('button');
        button.textContent = "Ver más";
        button.onclick = function() {
            window.location.href = movie.enlace; 
        };

        // Agrega los elementos a la tarjeta
        card.appendChild(poster);
        card.appendChild(title);
        card.appendChild(year);
        

        // Agrega la tarjeta al contenedor
        moviesContainer.appendChild(card);
    });
});