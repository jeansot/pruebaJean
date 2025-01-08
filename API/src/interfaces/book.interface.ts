export interface Book {
    title: string, 
    author: string, 
    genre: string, 
    publishedYear: number
    referenceCode: string;
}


/*
■ title: String (obligatorio)
 ■ author: String (obligatorio)
 ■ genre: String (obligatorio, debe ser uno de los géneros
 en el catálogo)
 ■ publishedYear: Number (opcional)
 */