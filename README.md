# Aplicación de Gestión de Libros

Esta es una aplicación web diseñada para gestionar una colección de libros. Incluye funcionalidades CRUD (Crear, Leer, Actualizar y Eliminar) y permite gestionar una lista de géneros literarios. Es una práctica de desarrollo diseñada para demostrar habilidades con tecnologías modernas.

---

## Características
- **CRUD de libros:** Agregar, listar, editar, buscar y eliminar libros.
- **Gestión de géneros literarios:** Visualización de géneros predefinidos inyectados en la base de datos al iniciar la aplicación.
- **Búsqueda avanzada:** Buscar libros por su código de referencia único (`referenceCode`).
- **Interfaz adaptable:** Diseño responsivo utilizando Bootstrap.

---

## Tecnologías Utilizadas
### **Frontend**
- Angular 16
- Bootstrap 5

### **Backend**
- Node.js
- Express.js
- MongoDB
- Mongoose

---

## Instalación
### Clonar el repositorio
```bash
git clone https://github.com/jeansot/pruebaJean.git

### Backend
Desde la raíz del proyecto:
cd API
npm install


### Frontend
Desde la raíz del proyecto:
cd APP
npm install


### Uso
Iniciar la aplicación
Backend
Desde la raíz del proyecto:
cd API
npm run start

El servidor estará disponible en http://localhost:3900.

### Frontend
Desde la raíz del proyecto:
cd APP
ng serve --open
La aplicación estará disponible en http://localhost:4200.

### Rutas del Backend
GET	/	Obtener todos los libros.
GET	/:id	Obtener detalles de un libro.
POST	/	Crear un nuevo libro.
PUT	/:id	Actualizar un libro existente.
DELETE	/:id	Eliminar un libro existente.

Este proyecto está bajo la licencia MIT.
