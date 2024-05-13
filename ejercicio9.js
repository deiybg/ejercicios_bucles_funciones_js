const xMen = [
    { name: 'Wolverine', year: 1974 },
    { name: 'Cyclops', year: 1963 },
    { name: 'Storm', year: 1975 },
    { name: 'Phoenix', year: 1963 },
    { name: 'Beast', year: 1963 },
    { name: 'Gambit', year: 1990 },
    { name: 'Nightcrawler', year: 1975 },
    { name: 'Magneto', year: 1963 },
    { name: 'Professor X', year: 1963 },
    { name: 'Mystique', year: 1978 }
  ];
  
  function findOldestXMen(xMen) {
  
    let oldestMember = xMen[0];
  
  
    for (const member of xMen) {
     
      if (member.year < oldestMember.year) {
       
        oldestMember = member;
      }
    }
  
    return oldestMember;
  }

  const oldestXMen = findOldestXMen(xMen);
console.log("El miembro más antiguo de los X-Men es:", oldestXMen.name);
  