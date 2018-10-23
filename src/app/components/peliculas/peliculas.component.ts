import { Component, OnInit } from '@angular/core';
import { PeliculasService, Pelicula} from '../../service/peliculas.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
})
export class PeliculasComponent implements OnInit {

  peliculas: Pelicula[] = [];

  constructor( private _peliculasService: PeliculasService,
               private _peliculasRouter: Router ) { }

  ngOnInit() {

    this.peliculas = this._peliculasService.getPeliculas();
  }

  verPelicula(idx: number ) {
    this._peliculasRouter.navigate(['/pelicula', idx]);
    }

}

