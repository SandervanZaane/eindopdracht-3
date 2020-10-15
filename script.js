////// Get movies and add them to html in Li's

const ul = document.getElementById("movielist");


function addMoviesToDom(movies) {

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
        console.log(li);
        return li
    })

    // for (i = 0; i < movies.length; i++) {
    //     const movie = movies[i];

    // }
};

addMoviesToDom(movies);

/////// Fiters

// Number(movie.Year)