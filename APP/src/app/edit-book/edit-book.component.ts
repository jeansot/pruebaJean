import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { LiteraryGenres } from '../models/literaryGenre.model';
import { GenresService } from '../services/genres.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css'],
})
export class EditBookComponent implements OnInit {
  searchForm: FormGroup;
  formularioEditar: FormGroup;
  bookFound: boolean = false;
  literaryGenres: LiteraryGenres[] = [];
  successMessage: string | null = null;
  errorMessage: string | null = null;
  referenceCode: string = '';

  constructor(
    private form: FormBuilder,
    private _apiService: ApiService,
    private _genresService: GenresService
  ) {
    this.searchForm = this.form.group({ 
      searchQuery: ['',[Validators.required,
                        Validators.pattern('^[0-9]+$') 
        ]
      ] 
    });

    this.formularioEditar = this.form.group({
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
      },
    });
  }
  hasErrors(controlName: string, errorType: string) {
    return this.formularioEditar.get(controlName)?.hasError(errorType) && this.formularioEditar.get(controlName)?.touched;
  }

  buscarLibro() {
    const searchQuery = this.searchForm.get('searchQuery')?.value.trim();

    if (!searchQuery) {
      this.errorMessage = 'Por favor, ingrese un código de referencia válido';
      this.bookFound = false;
      return;
    }

    this.errorMessage = null;

    this._apiService.getBook(searchQuery).subscribe({
      next: (book) => {
        this.bookFound = true;
        this.referenceCode = book.referenceCode; // Guardamos el nuevoreferenceCode
        this.errorMessage = null;
        this.formularioEditar.patchValue({
          title: book.title,
          author: book.author,
          genre: book.genre,
          publishedYear: book.publishedYear || '',
        });
      },
      error: () => {
        this.errorMessage = 'No se encontró el libro';
        this.bookFound = false;
      },
    });
  }

  editar() {
    if (this.formularioEditar.valid) {
      const updatedBook = this.formularioEditar.value;

      this._apiService.updateBook(this.referenceCode, updatedBook).subscribe({
        next: () => {
          this.successMessage = 'Libro editado exitosamente.';
          this.errorMessage = null;
        },
        error: () => {
          this.successMessage = null;
          this.errorMessage = 'Error al editar el libro.';
        },
      });
    } else {
      console.warn('Formulario inválido');
    }
  }
}

