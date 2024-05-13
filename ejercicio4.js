const cartoons = [
  { name: "Mickey Mouse", debut: 1928 },
  { name: "Bugs Bunny", debut: 1938 },
  { name: "SpongeBob SquarePants", debut: 1999 },
  { name: "Tom and Jerry", debut: 1940 },
  { name: "Scooby-Doo", debut: 1969 },
  { name: "The Flintstones", debut: 1960 },
  { name: "Batman: The Animated Series", debut: 1992 },
  { name: "The Simpsons", debut: 1989 },
  { name: "Pokémon", debut: 1997 },
  { name: "Dexter's Laboratory", debut: 1996 },
  
];

const oldCartoons = { name: '', debut: Infinity }; 

for (const cartoon of cartoons) {
  if (cartoon.debut < oldCartoons.debut) {
    oldCartoons.name = cartoon.name; // 
    oldCartoons.debut = cartoon.debut; // 
  }
}



console.log(`La serie de dibujos animados más antigua es: ${oldCartoons.name} y el año de debut fue : ${oldCartoons.debut}`);
