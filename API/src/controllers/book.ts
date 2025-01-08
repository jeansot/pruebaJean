import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import {insertBookSC, getBookSC, getBooksSC, updateBookSC, deleteBookSC} from "../services/book.service"

const getBook = async ({ params }: Request, res: Response) => {
    const { id } = params;
    const response = await getBookSC(id); // id es el referenceCode 
    const data = response ? response : "No encontrado";
    res.send(data);
};

const getBooks = async (req:Request, res: Response) => {
    
    try {
        const  response = await getBooksSC();
        res.send(response);
        
    } catch (e) {
        handleHttp(res, 'ERROR_GET_BOOKS', e);
        
    }
};


const updateBook = async ({ params, body }: Request, res: Response) => {
    try {
      const { id } = params; 
      const response = await updateBookSC(id, body); 
      const data = response ? response : "NOT_FOUND"; 
      res.send(data);
    } catch (e) {
      handleHttp(res, 'ERROR_UPDATE_BOOK');
    }
  };

const postBook = async ({ body }: Request, res: Response) => {
    try {
        const books = await getBooksSC();
        const referenceCodes = books
            .map(book => parseInt(book.referenceCode || '0'));
        // manejo de referenceCode
        const maxReferenceCode = referenceCodes.length > 0 ? Math.max(...referenceCodes) : 0;
        const newReferenceCode = (maxReferenceCode + 1).toString();

        const bookWithReferenceCode = { ...body, referenceCode: newReferenceCode };// Crea el nuevo libro con el referenceCode
        const responseBook = await insertBookSC(bookWithReferenceCode);
        res.send(responseBook);
    } catch (e) {
        handleHttp(res, 'ERROR_POST_BOOK', e);
    }
};
    
const deleteBook = async ({ params }: Request, res: Response) => {
    try {
      const { id } = params;
      const response = await deleteBookSC(id); 
      const data = response ? response : "NOT_FOUND"; 
      res.send(data);
    } catch (e) {
      handleHttp(res, 'ERROR_DELETE_BOOK');
    }
  };

export {getBook, getBooks,  updateBook, postBook, deleteBook};
