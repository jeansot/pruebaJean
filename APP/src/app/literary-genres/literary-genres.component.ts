import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { LiteraryGenres } from '../models/literaryGenre.model';
import { GenresService } from '../services/genres.service';

@Component({
  selector: 'app-literary-genres',
  templateUrl: './literary-genres.component.html',
  styleUrls: ['./literary-genres.component.css']
})
export class LiteraryGenresComponent implements OnInit {


  literaryGenres: LiteraryGenres[] = [];
  constructor(private _apiService:GenresService ){}
  ngOnInit(): void {
          this._apiService.getGenre().subscribe((data:LiteraryGenres[])=>{
          console.log(data)
          this.literaryGenres = data;
  })



}
}

