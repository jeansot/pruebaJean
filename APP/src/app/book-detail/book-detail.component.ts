import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Book } from '../models/book.model';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent {
  book?: Book;
  searchForm: FormGroup; 
  errorMessage: string | null = null;

  constructor(private formBuilder: FormBuilder, private _apiService: ApiService) {
   
    this.searchForm = this.formBuilder.group({ 
      searchQuery: ['',[Validators.required,
                        Validators.pattern('^[0-9]+$') // Solo permite valores numéricos
        ]
      ] 
    });
  }

  buscarLibro() {
    const searchValue = this.searchForm.get('searchQuery')?.value.trim();
  
    if (!searchValue) {
      this.errorMessage = 'Por favor, ingrese un código de referencia válido';
      this.book = undefined;
      return;
    }
  
    this.errorMessage = null;
  
    // Buscar porreferenceCode
    this._apiService.getBook(searchValue).subscribe({
      next: (response) => {
        this.book = response;
      },
      error: () => {
        this.errorMessage = 'No se encontró el libro con el código de referencia proporcionado';
        this.book = undefined;
      },
    });
  }
  
}
