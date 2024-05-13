const mutants = [
    { name: 'Wolverine', power: 'regeneration' },
    { name: 'Magneto', power: 'magnetism' },
    { name: 'Professor X', power: 'telepathy' },
    { name: 'Jean Grey', power: 'telekinesis' },
    { name: 'Rogue', power: 'power absorption' },
    { name: 'Storm', power: 'weather manipulation' },
    { name: 'Mystique', power: 'shape-shifting' },
    { name: 'Beast', power: 'superhuman strength' },
    { name: 'Colossus', power: 'steel skin' },
    { name: 'Nightcrawler', power: 'teleportation' }
  ];
  

  
function findMutantByPower(mutants, power) {
    const foundMutants = [];
  
    for (const mutant of mutants) {
      if (mutant.power === power) {
        foundMutants.push(mutant.name);
      }
    }
    
    if (foundMutants.length > 0) {
      return foundMutants;
    } else {
      return "No se encontraron mutantes con ese poder.";
    }
  }
  
  // Ejemplo de uso:
  console.log(findMutantByPower(mutants, 'telekinesis')); // Salida: [ 'Jean Grey' ]
  console.log(findMutantByPower(mutants, 'teleportation')); // Salida: [ 'Nightcrawler' ]
  console.log(findMutantByPower(mutants, 'pyrokinesis')); // Salida: No se encontraron mutantes con ese poder.
  