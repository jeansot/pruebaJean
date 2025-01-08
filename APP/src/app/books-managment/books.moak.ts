export const booksManagment: Book []= [
    {id:1, title: 'titulo1', author: 'author1', genre:'genre1', publishedYear: 2020},
    {id:2, title: 'titulo2', author: 'author2', genre:'genre2'},
    {id:3, title: 'titulo3', author: 'author3', genre:'genre3'},
    {id:4, title: 'titulo4', author: 'author4', genre:'genre4'},
    {id:5, title: 'titulo5', author: 'author5', genre:'genre5'},
    {id:6, title: 'titulo6', author: 'author6', genre:'genre6'}, 


]

export interface Book {

    id: number | string;
    title: string;
    author: string;
    genre: string;
    publishedYear?: number;
}