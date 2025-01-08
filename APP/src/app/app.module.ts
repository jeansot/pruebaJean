import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BooksManagmentComponent } from './books-managment/books-managment.component';
import { AddBookComponent } from './add-book/add-book.component';
import { DeleteBookComponent } from './delete-book/delete-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LiteraryGenresComponent } from './literary-genres/literary-genres.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BooksManagmentComponent,
    AddBookComponent,
    DeleteBookComponent,
    EditBookComponent,
    BookDetailComponent,
    LiteraryGenresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
