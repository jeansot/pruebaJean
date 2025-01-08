import {Schema, Types, model, Model} from "mongoose";
import { LiteraryGenre } from '../interfaces/literaryGenre.interface';

const LiteraryGenreSchema = new Schema<LiteraryGenre>(
    {

        _id: {type: String, required:true},
        name: {type: String,required:true },
        
        },


    {
        timestamps:true, 
        versionKey:false
    }


);



const LiteraryGenreModel = model("literaryGenre", LiteraryGenreSchema);

export default LiteraryGenreModel;