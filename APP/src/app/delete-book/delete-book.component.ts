import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Book } from '../models/book.model';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css'],
})
export class DeleteBookComponent {
  searchForm: FormGroup; 
  book?: Book; 
  successMessage: string | null = null; 
  errorMessage: string | null = null; 

  constructor(private formBuilder: FormBuilder, private _apiService: ApiService) {
    this.searchForm = this.formBuilder.group({
      searchQuery: ['',[Validators.required,
                        Validators.pattern('^[0-9]+$') // Solo permite valores numéricos
]]

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
  
    // Buscar por referenceCode
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

  eliminarLibro() {
    if (this.book) {
      this._apiService.deleteBook(this.book.referenceCode).subscribe({
        next: () => {
          this.successMessage = 'Libro eliminado exitosamente.';
          this.errorMessage = null;
          this.book = undefined;
          this.searchForm.reset();
        },
        error: () => {
          this.successMessage = null;
          this.errorMessage = 'Error al eliminar el libro.';
        },
      });
    }
  }
  
}
