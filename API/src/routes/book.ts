import { Router } from "express";
import { deleteBook, getBooks, postBook, updateBook, getBook } from "../controllers/book";

const router = Router();

router.get("/", getBooks);
router.get("/:id", getBook);
router.post("/", postBook);
router.put("/:id", updateBook);
router.delete("/:id", deleteBook);


export {router};    
