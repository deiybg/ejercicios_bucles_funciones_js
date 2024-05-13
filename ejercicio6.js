const starWarsMovies = [
  { title: "A New Hope", releaseYear: 1977 },
  { title: "The Empire Strikes Back", releaseYear: 1980 },
  { title: "Return of the Jedi", releaseYear: 1983 },
  { title: "The Phantom Menace", releaseYear: 1999 },
  { title: "Attack of the Clones", releaseYear: 2002 },
  { title: "Revenge of the Sith", releaseYear: 2005 },
  { title: "The Force Awakens", releaseYear: 2015 },
  { title: "The Last Jedi", releaseYear: 2017 },
  { title: "The Rise of Skywalker", releaseYear: 2019 },
  { title: "Rogue One", releaseYear: 2016 },
  { title: "Solo", releaseYear: 2018 },
];

// Añade tu código de bucle aquí

const seventies = [];
const eighties = [];
const nineties = [];
const twoThousandYears = [];
const twoThousandTenTears = [];

for (const movies of starWarsMovies) {
   
    if (movies.releaseYear > 2010) {
        twoThousandTenTears.push(movies);
        
        
    } else if(movies.releaseYear > 2000){
        twoThousandYears.push(movies);
        
    }else if(movies.releaseYear >1990){
        nineties.push(movies);

    }else if (movies.releaseYear >1980){
        eighties.push(movies);
    }else{
        seventies.push(movies);
    }
}

console.log(`Las peliculas de la decada de los 70´s son las siguientes: `, seventies);
console.log(`Las peliculas de la decada de los 80´s son las siguientes: `, eighties);
console.log(`Las peliculas de la decada de los 90´s son las siguientes: `, nineties);
console.log(`Las peliculas de la decada del 2000 son las siguientes: `, twoThousandYears);
console.log(`Las peliculas de la decada del 2010 son las siguientes: `, twoThousandTenTears);


