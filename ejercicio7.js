const tracks = [
    { title: 'Enter Sandman', genre: 'Metal' },
    { title: 'Back in Black', genre: 'Rock' },
    { title: 'Bohemian Rhapsody', genre: 'Rock' },
    { title: 'Blinding Lights', genre: 'Pop' },
    { title: 'Old Town Road', genre: 'Country' },
    { title: 'Smells Like Teen Spirit', genre: 'Grunge' },
    { title: 'Bad Guy', genre: 'Pop' },
    { title: 'Thunderstruck', genre: 'Rock' },
    { title: 'Hotel California', genre: 'Rock' },
    { title: 'Stairway to Heaven', genre: 'Rock' }
  ];
  
  // Objeto para almacenar las pistas clasificadas por género
  const genreTracks = {};
  
  // Recorremos el array de pistas
  for (const track of tracks) {
    // Verificamos si el género ya está presente en el objeto
    if (genreTracks.hasOwnProperty(track.genre)) {
      // Si el género ya existe, simplemente agregamos la pista al array correspondiente
      genreTracks[track.genre].push(track.title);
     
    } else {
      // Si el género no existe, creamos un nuevo array con la pista y lo asignamos al género
      genreTracks[track.genre] = [track.title];
    }
  }
  
  
  console.log(genreTracks);
  