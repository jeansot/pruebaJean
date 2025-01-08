import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book.model';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-books-managment',
  templateUrl: './books-managment.component.html',
  styleUrls: ['./books-managment.component.css']
})
export class BooksManagmentComponent implements OnInit{

  booksManagment: Book[] = [];
  constructor(private _apiService: ApiService){
  }
  ngOnInit(): void {
    this._apiService.getBooks().subscribe((data:Book[])=>{
      console.log(data)
      this.booksManagment = data;
    })
    
  }
}
