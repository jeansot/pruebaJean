import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { LiteraryGenres } from '../models/literaryGenre.model';
import { GenresService } from '../services/genres.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  formularioCrear: FormGroup;
  literaryGenres: LiteraryGenres[] = [];
  successMessage: string | null = null;
  errorMessage: string | null = null;

  constructor(private form: FormBuilder, private _apiService: ApiService, private _genresService: GenresService) {
    this.formularioCrear = this.form.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      genre: ['', Validators.required],
      publishedYear: ['', [Validators.pattern('^[0-9]*$')]],
    });
    
  }

  ngOnInit(): void {
    this._genresService.getGenre().subscribe({
      next: (genres) => {
        this.literaryGenres = genres;
      },
      error: (err) => {
        console.error('Error al cargar los géneros:', err);
      }
    });
  }
  hasErrors(controlName: string, errorType: string) {
    return this.formularioCrear.get(controlName)?.hasError(errorType) && this.formularioCrear.get(controlName)?.touched;
  }
  crear() {
    if (this.formularioCrear.valid) {
        const { referenceCode, ...formData } = this.formularioCrear.value; // Excluye referenceCode
        this._apiService.createBook(formData).subscribe({
            next: () => {
                this.successMessage = 'Libro creado exitosamente.';
                this.errorMessage = null;
                this.formularioCrear.reset();
                this.formularioCrear.markAsUntouched();
            },
            error: () => {
                this.successMessage = null;
                this.errorMessage = 'Error al crear el libro.';
            },
        });
    }
}

  
  
  
}

