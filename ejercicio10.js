const capitals = {
  Spain: "Madrid",
  France: "Paris",
  Italy: "Rome",
  Germany: "Berlin",
  Portugal: "Lisbon",
  Poland: "Warsaw",
  Greece: "Athens",
  Austria: "Vienna",
  Hungary: "Budapest",
  Ireland: "Dublin",
};

function getCapital(country) {
  if (capitals.hasOwnProperty(country)) {
    return capitals[country];
  } else {
    return `La capital de ${country} no está en la lista.`;
  }
}

console.log(getCapital("Hungary"));
console.log(getCapital("Ireland"));
console.log(getCapital("Venezuela"));
