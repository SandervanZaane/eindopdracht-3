////// Get movies and add them to html in Li's

const ul = document.getElementById("movielist");


function renderMoviesToDom(movies) {

    clearMoviesFromDom();

    const moviesAsListElements = movies.map(obj => {
        const li = document.createElement("li");
        const textHolder = document.createTextNode(obj.Title + obj.Type);
        li.appendChild(textHolder);
        const a = document.createElement("a")
        a.href = obj.Poster;
        li.appendChild(a);
        const img = document.createElement("img")
        img.src = obj.Poster;
        a.appendChild(img);
        ul.appendChild(li);
        return li
    });

    // for (i = 0; i < movies.length; i++) {
    //     const movie = movies[i];

    // }
};

renderMoviesToDom(movies);

/////// Fiters
function filterByNewest(arr) {
    return arr.filter(obj => obj.Year >= 2014);
};

/////// Clear Filters Function
function clearMoviesFromDom() {
    document.getElementById("movielist").innerHTML = "";
};




/////// 
window.onload = function() {
    console.log("window Loaded")
    const radioNewest = document.getElementById("newest");
    const radioAvengers = document.getElementById("avengers");
    const radioXmen = document.getElementById("xmen");
    const radioPrincess = document.getElementById("princess");
    const radioOther = document.getElementById("other");

    radioNewest.onclick = function() {
        console.log("clicked radioNewest")

        renderMoviesToDom(filterByNewest(movies));
    }
};