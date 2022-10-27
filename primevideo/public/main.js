const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
    const itemNumber = movieLists[i].querySelectorAll("img").length;
    let clickCounter = 0;
    arrow.addEventListener("click", () => {
        const ratio = Math.floor(window.innerWidth / 270);
        clickCounter++;
        if (itemNumber - (4 + clickCounter) + (4 - ratio) >= 0) {
            movieLists[i].style.transform = `translateX(${
        movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
        } else {
            movieLists[i].style.transform = "translateX(0)";
            clickCounter = 0;
        }
    });

    console.log(Math.floor(window.innerWidth / 270));
});

//TOGGLE

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
    ".container,.movie-list-title,.navbar-container,.sidebar,.left-menu-icon,.toggle"
);

ball.addEventListener("click", () => {
    items.forEach((item) => {
        item.classList.toggle("active");
    });
    ball.classList.toggle("active");
});
const charactersList = document.getElementById('charactersList');
const searchBar = document.getElementById('searchBar');
let movie = [];

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value;

    const filteredCharacters = hpCharacters.filter((movie) => {
        return (
            movie.name.includes(searchString)
        );
    });
    displayCharacters(filteredCharacters);
});

const loadCharacters = async() => {
    try {
        const res = await fetch('https://primevideo7.herokuapp.com/');
        movie = await res.json();
        console.log(movie)
        displayCharacters(movie);
    } catch (err) {
        console.error(err);
    }
};

const displayCharacters = (search) => {
    const htmlString = search
        .map((movie) => {
            return `
            <li class="character">
                <h2>${movie.name}</h2>
                <img src="${character.image}"></img>
            </li>
        `;
        })
        .join('');
    charactersList.innerHTML = htmlString;
};

loadCharacters();