////// Get movies and add them to html in Li's

const ul = document.getElementById("movielist");

function renderMoviesToDom(movies) {

    clearMoviesFromDom();

    const moviesAsListElements = movies.map(obj => {
        const li = document.createElement("li");
        // const p = document.createElement("p");
        // const textHolder = document.createTextNode("Titel: " + obj.Title);
        // p.appendChild(textHolder);
        // const textHolder2 = document.createTextNode("Jaar van release: " + obj.Year + "IMDB Nummer: " + obj.imdbID);
        // p.appendChild(textHolder2);
        // li.appendChild(p);
        const a = document.createElement("a")
        a.href = obj.Poster;
        li.appendChild(a);
        const img = document.createElement("img")
        img.src = obj.Poster;
        a.appendChild(img);
        ul.appendChild(li);
        return li
    });
};

renderMoviesToDom(movies);

/////// Fiter functions
function filterByNewest(arr) {
    console.log('returned newest filter');
    return arr.filter(obj => obj.Year >= 2014);
};

function filterByAvengers(arr) {
    console.log('returned Avengers');
    searchTerm = "Avengers";
    return arr.filter(obj => obj.Title.includes(searchTerm));
};

function filterByXmen(arr) {
    console.log('returned X-men');
    searchTerm = "X-Men";
    return arr.filter(obj => obj.Title.includes(searchTerm));
};

function filterByPrincess(arr) {
    console.log('returned Princess');
    searchTerm = "Princess";
    return arr.filter(obj => obj.Title.includes(searchTerm));
};

function filterByBatman(arr) {
    console.log('returned Batman');
    searchTerm = "Batman";
    return arr.filter(obj => obj.Title.includes(searchTerm));
};
/////// Clear Filters Function
function clearMoviesFromDom() {
    document.getElementById("movielist").innerHTML = "";
};


/////// Radiobuttons listners
window.onload = function() {
    console.log("window Loaded")
    const radioNewest = document.getElementById("newest");
    const radioAvengers = document.getElementById("avengers");
    const radioXmen = document.getElementById("xmen");
    const radioPrincess = document.getElementById("princess");
    const radioBatman = document.getElementById("batman");


    radioNewest.onclick = function() {
        console.log("clicked radioNewest")
        renderMoviesToDom(filterByNewest(movies));
    }

    radioAvengers.onclick = function() {
        console.log("clicked radioAvengers");
        renderMoviesToDom(filterByAvengers(movies));
    }

    radioXmen.onclick = function() {
        console.log("clicked radioXmen");
        renderMoviesToDom(filterByXmen(movies));
    }

    radioPrincess.onclick = function() {
        console.log("clicked princess");
        renderMoviesToDom(filterByPrincess(movies));
    }

    radioBatman.onclick = function() {
        console.log("clicked Batman");
        renderMoviesToDom(filterByBatman(movies));
    }
};