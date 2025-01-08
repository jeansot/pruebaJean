import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import {initializeGenres, getLiteraryGenreSC, getLiteraryGenresSC} from "../services/literaryGenre.service"

const getliteraryGenre = async ({params}:Request, res: Response) => {

    try {    
        const {id} = params;
        const  response = await getLiteraryGenreSC(id);
        const data = response ? response: "NOT_FOUND";
        res.send(data);
    } catch (e) {
        handleHttp(res, 'ERROR_GET_literaryGenre');
        
    }
};

const getliteraryGenres = async (req:Request, res: Response) => {
    
    try {
        const  response = await getLiteraryGenresSC();
        res.send(response);
        
    } catch (e) {
        handleHttp(res, 'ERROR_GET_literaryGenreS', e);
        
    }
};

export {getliteraryGenre, getliteraryGenres};
