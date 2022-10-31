function addMoviesToDom(movies) {
    const films = document.getElementById("films");

    const listItems = movies.map((movie) => {

        let listItem = document.createElement("li");
        let image = document.createElement("img");
        image.src = movie.Poster;

        let link = document.createElement("a");
        link.href = "https://www.imdb.com/title/" + movie.imdbID;
        

        listItem.appendChild(link);
        link.appendChild(image);

        return listItem;
    });

    listItems.forEach((listItem) => {
        films.appendChild(listItem);
    });
}

function removeMoviesFromDOM() {
    const currentListedMovies = document.getElementById("films");

    while (currentListedMovies.hasChildNodes()) {
        currentListedMovies.removeChild(currentListedMovies.firstChild);   
    };
}

function addEventListeners() {
    const radioButtons = document.getElementsByName("film");

    radioButtons.forEach((radioButton) => {
        radioButton.addEventListener("change", handleOnChangeEvent);
    });
}

function filterMoviesOnTitle(wordInMovieTitle) {
    removeMoviesFromDOM();

    const filterMovies = movieDB.Movies
        .filter((movie) => {
            return movie.Title.includes(wordInMovieTitle);
        });

    addMoviesToDom(filterMovies);

}

function filterLatestMovies() {
    removeMoviesFromDOM();

    const filterMoviesYear = movieDB.Movies
        .filter((movie) => {
            return movie.Year >= 2014;
        });

    addMoviesToDom(filterMoviesYear);

}

function handleOnChangeEvent(event) {
    switch (event.target.value) {
        case "latest":
            filterLatestMovies();
            break;
        case "avenger":
            filterMoviesOnTitle("Avenger");
            break;
        case "xmen":
            filterMoviesOnTitle("X-Men");
            break;
        case "princess":
            filterMoviesOnTitle("Princess");
            break;
        case "batman":
            filterMoviesOnTitle("Batman");
            break;
    }
}

addEventListeners();
