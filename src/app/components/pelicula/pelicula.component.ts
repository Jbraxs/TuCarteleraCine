import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../../service/peliculas.service';


@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
})
export class PeliculaComponent {

  pelicula: any = {};

  constructor( private activatedRoute: ActivatedRoute,
               private _peliculasService: PeliculasService
    ) {
    this.activatedRoute.params.subscribe( params => {
      this.pelicula = this._peliculasService.getPelicula ( params['id'] );
    });

  }
}




