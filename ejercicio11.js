const movies = [
    { title: 'Inception', duration: 148 },
    { title: 'The Dark Knight', duration: 152 },
    { title: 'Interstellar', duration: 169 },
    { title: 'Dunkirk', duration: 106 },
    { title: 'The Prestige', duration: 130 },
    { title: 'Memento', duration: 113 },
    { title: 'Batman Begins', duration: 140 },
    { title: 'The Dark Knight Rises', duration: 164 },
    { title: 'Tenet', duration: 150 },
    { title: 'Insomnia', duration: 118 }
  ];
  
  function averageMovieDuration(movies) {

    let average = 0;
    
    for (const movie of movies) {
       
            average += movie.duration;
            console.log(average);
        
    }
    const averageDuration = average / movies.length;
    return averageDuration;
  }
  
  console.log(`eld promedio de duración de todas las peliculas es de: `, averageMovieDuration(movies));