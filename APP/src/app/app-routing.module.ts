import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddBookComponent } from './add-book/add-book.component';
import { BooksManagmentComponent } from './books-managment/books-managment.component';
import { DeleteBookComponent } from './delete-book/delete-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { LiteraryGenresComponent } from './literary-genres/literary-genres.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'addBook', component:AddBookComponent},
  {path: 'booksManagment', component: BooksManagmentComponent },
  {path: 'deleteBook', component: DeleteBookComponent },
  {path: 'editBook',component:EditBookComponent },
  { path: 'book-detail', component: BookDetailComponent },
  {path: '**', redirectTo: '', pathMatch: 'full' },
  {path: 'literaryGenres', component:LiteraryGenresComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
