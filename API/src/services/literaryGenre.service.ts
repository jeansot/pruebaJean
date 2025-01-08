import literaryGenreModel from "../models/literaryGenre";


const genres = [
    { _id: "1", name: "Ficción" },
    { _id: "2", name: "No Ficción" },
    { _id: "3", name: "Fantasía" },
    { _id: "4", name: "Ciencia Ficción" },
    { _id: "5", name: "Misterio" },
    { _id: "6", name: "Biografía" },
  ];
  
  const initializeGenres = async () => {
    try {
      const existingGenres = await literaryGenreModel.find();
  
      if (existingGenres.length === 0) {
        await literaryGenreModel.insertMany(genres);
        console.log("Géneros insertados en la base de datos");
      }
      const allGenres = await literaryGenreModel.find();
      console.log("Géneros literarios en la base de datos:");
      allGenres.forEach((genres) => console.log(`- ${genres.name}`));
    } catch (handleHttp) {
      console.log("Error al inicializar o mostrar géneros:", handleHttp);
    }
  };

  const getLiteraryGenreSC = async(id:string) => {

    const responseInsert = await literaryGenreModel.findOne({_id: id});
    return responseInsert;
}

const getLiteraryGenresSC = async() => {

    const responseInsert = await literaryGenreModel.find({});
    return responseInsert;
}



export {initializeGenres,  getLiteraryGenreSC, getLiteraryGenresSC};

