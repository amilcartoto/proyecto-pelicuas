console.log(tempData);


const moviesContainer = document.getElementById("movies-container");



tempData.forEach((movie) => {
    const card = document.createElement("div");
    card.classList.add("card");


    const title = document.createElement("h3");
    title.classList.add("card-title");
    title.innerHTML = movie.title;

    const poster = document.createElement("img");
    postar.classList.add("card-image");
    poster.src = movie.poster;

    const year = document.createElement("p");
    year.classList.add("card-text");
    year.innerHTML = movie.title;
});