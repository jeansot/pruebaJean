import { Router } from "express";
import { getliteraryGenre, getliteraryGenres } from "../controllers/literaryGenres"    


const router = Router();

router.get("/", getliteraryGenres);
router.get("/:id", getliteraryGenre);


export {router}; 