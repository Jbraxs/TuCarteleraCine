import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-peli',
  templateUrl: './peli.component.html',
})
export class PeliComponent implements OnInit {

  @Input() pelicula: any = {};
  @Input() index: number;

  constructor( private _peliculasRouter: Router ) {

   }

  ngOnInit() {
  }

  verPelicula() {
  this._peliculasRouter.navigate(['/pelicula', this.index]);

  }

}
