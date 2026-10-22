
const movies = [
      {
        title: "Spider-Man: Into the Spider-Verse",
        date: "Dec 14, 2018",
        description: "Miles Morales becomes the Spider-Man of his reality and crosses paths with others from the multiverse.",
        imgSrc: "https://wddbyui.github.io/wdd131/images/spiderman.png",
        imgAlt: "Miles Morales swinging through the city",
        ages: "10+",
        genre: "Action/Adventure",
        stars: "⭐⭐⭐⭐⭐"
      },
      {
        title: "The Other Side of Heaven",
        date: "December 14, 2001",
        description: "Based on the true story of Elder John H. Groberg, a missionary in Tonga in the 1950s, this film tells a powerful story of faith, hardship, and miracles.",
        imgSrc: "https://wddbyui.github.io/wdd131/images/heaven.png",
        imgAlt: "Poster for The Other Side of Heaven showing a missionary and tropical landscape",
        ages: "10+",
        genre: "Drama/Religious",
        stars: "⭐⭐⭐⭐"
      },
      {
        title: "Luca",
        date: "June 18, 2021",
        description: "Two sea monsters experience a life-changing summer on the Italian Riviera.",
        imgSrc: "https://wddbyui.github.io/wdd131/images/luca.png",
        imgAlt: "Luca and Alberto standing on the beach",
        ages: "6+",
        genre: "Family/Fantasy",
        stars: "⭐⭐⭐⭐"
      },
      {
        title: "17 Miracles",
        date: "June 3, 2011",
        description: "A moving depiction of the Willie Handcart Company's journey west in 1856, focusing on the miraculous events that helped early pioneers survive one of the harshest migrations in history.",
        imgSrc: "https://wddbyui.github.io/wdd131/images/miracles.jpg",
        imgAlt: "Movie poster for 17 Miracles showing handcart pioneers walking through snow",
        ages: "12+",
        genre: "Historical/Religious",
        stars: "⭐⭐⭐⭐"
      },
      {
        title: "The Incredibles",
        date: "November 5, 2004",
        description: "A family of undercover superheroes tries to live a quiet suburban life until a new threat forces them to use their extraordinary powers.",
        imgSrc: "https://image.tmdb.org/t/p/w500/2LqaLgk4Z226KkgPJuiOQ58wvrm.jpg",
        imgAlt: "Placeholder poster for The Incredibles",
        ages: "8+",
        genre: "Action/Family",
        stars: "⭐⭐⭐⭐⭐"
        },
        {
        title: "Finding Nemo",
        date: "May 30, 2003",
        description: "A clownfish named Marlin travels across the ocean to find his missing son, Nemo, with help from a forgetful fish named Dory.",
        imgSrc:  "https://image.tmdb.org/t/p/w500/eHuGQ10FUzK1mdOY69wF5pGgEf5.jpg",
        imgAlt: "Placeholder poster for Finding Nemo",
        ages: "6+",
        genre: "Animation/Adventure",
        stars: "⭐⭐⭐⭐⭐"
        }
    ];

    movies.forEach(movie => {
        // Code for going through each movie and creating content for that movie
        const movieSummary =`
    <article class="movie">
      <h2>${movie.title}</h2>
      <img src=${movie.imgSrc} alt=${movie.imgAlt}>
      <p><strong>Release Date:</strong> ${movie.date}</p>
      <p><strong>Recommended Age:</strong> ${movie.ages}</p>
      <p><strong>Genre:</strong> ${movie.genre}</p>
      <p><strong>Rating:</strong> <span>${movie.stars}</span></p>
      <p id='desc'>${movie.description}</p>
    </article>
    `;

    document.getElementById("movie-list").innerHTML += movieSummary

    
    });
          





/*
     <article class="movie">
       <h2>The Other Side of Heaven</h2>
       <img src="https://wddbyui.github.io/wdd131/images/heaven.png" alt="A young couple and missionaries in a row boat on the ocean">
       <p><strong>Release Date:</strong> December 14, 2001</p>
       <p><strong>Recommended Age:</strong> 10+</p>
       <p><strong>Genre:</strong> Drama/Religious</p>
       <p><strong>Rating:</strong> <span>⭐⭐⭐⭐</span></p>
       <p id='desc'>Based on the true story of Elder John H. Groberg, a missionary in Tonga in the 1950s, this film tells a powerful story of faith, hardship, and miracles.</p>
     </article>
*/
    