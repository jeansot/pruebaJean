import { Book } from "../interfaces/book.interface";
import BookModel from "../models/book";


const insertBookSC = async(book:Book) => {

    const responseInsert = await BookModel.create(book);
    return responseInsert;
}

const getBookSC = async (referenceCode: string) => {
  const responseInsert = await BookModel.findOne({ referenceCode });
  return responseInsert;
};

  const getBooksSC = async () => {
    const responseInsert = await BookModel.find({});
    return responseInsert;
  };
  

const updateBookSC = async (referenceCode: string, data: Book) => {
  const responseInsert = await BookModel.findOneAndUpdate({ referenceCode }, data, { new: true });
  return responseInsert;
};
  
const deleteBookSC = async (referenceCode: string) => {
  await BookModel.deleteOne({ referenceCode });

  //Obtener todos los libros ordenados por referenceCode
  const books = await BookModel.find().sort({ referenceCode: 1 });

  //Reasignar referenceCode en orden nuevamente para que no se descuadre
  for (let i = 0; i < books.length; i++) {
    books[i].referenceCode = (i + 1).toString();
    await books[i].save();
  }

  return { message: "Libro eliminado correctamente" };
};

export {insertBookSC,  getBookSC, getBooksSC, updateBookSC, deleteBookSC};
