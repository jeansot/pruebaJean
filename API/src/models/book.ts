import {Schema, Types, model, Model} from "mongoose";
import { Book } from '../interfaces/book.interface';

const BookSchema = new Schema<Book>(
    {

        title: {type: String, required:true},
        author: {type: String,required:true },
        genre: {type:String, required:true},
        publishedYear: {type:Number, required:false},
        referenceCode: {type:String, required:true, unique:true },

    },


    {
        timestamps:true, 
        versionKey:false
    }


);



const BookModel = model("book", BookSchema);

export default BookModel;