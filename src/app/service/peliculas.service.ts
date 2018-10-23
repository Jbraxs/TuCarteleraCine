import { Injectable } from '@angular/core';


@Injectable()

export class PeliculasService {

    private peliculas: Pelicula[] = [
        {
            nombre: 'Venom',
            bio: 'Venom es una película de supervillanos, basada en el personaje de Marvel, Venom, dirigida por Ruben Fleischer. La película pretende ser la primera en el Universo Marvel de Sony, adjunta pero separada del Universo cinematográfico de Marvel.',
            wiki: 'https://es.wikipedia.org/wiki/Venom_(pel%C3%ADcula_de_2018)',
            img: 'assets/img/venom.jpg',
            fecha: '4 de Octubre de 2018',
            director: 'Ruben Fleischer',
            duracion: '2h 20m'
          },
          {
            nombre: 'Slender Man',
            bio: 'Cuatro adolescentes de un pequeño pueblo invocan en un ritual a una criatura alta, delgada y espeluznante llamada Slender Man. Las muchachas se dan cuenta pronto de que la broma ha dejado de tener gracia y que sus vidas corren peligro.',
            wiki: 'https://es.wikipedia.org/wiki/Slender_Man',
            img: 'assets/img/slender.jpg',
            fecha: '10 de Agosto de 2018',
            director: 'Sylvain White',
            duracion: '1h 31m',
          },
          {
            nombre: 'La casa del reloj en la pared',
            bio: 'The House with a Clock in Its Walls es una película estadounidense de comedia-terror y fantasía gótica dirigida por Eli Roth y escrita por Eric Kripke. Está basada en la novela del mismo nombre escrita por John Bellairs e ilustrada por Edward Gorey',
            wiki: 'https://es.wikipedia.org/wiki/The_House_with_a_Clock_in_Its_Walls_(pel%C3%ADcula)',
            img: 'assets/img/lacasa.jpg',
            fecha: '20 de Septiembre de 2018',
            director: 'Eli Roth',
            duracion: '1h 45m',
          },
          {
            nombre: 'Smallfoot',
            bio: 'Smallfoot es una película estadounidense musical de comedia y aventura animada por computadora producida por Warner Animation Group.',
            wiki: 'https://es.wikipedia.org/wiki/Smallfoot',
            img: 'assets/img/small.jpg',
            fecha: '28 de Septiembre de 2018',
            director: 'Karey Kirkpatrick',
            duracion: '1h 49m',
          },
          {
            nombre: 'First Man',
            bio: 'First Man es una película norteamericana de 2018, que trata sobre la preparación de la misión Apolo XI en 1969. Está dirigida por Damien Chazelle con guion de Nicole Perlman y Josh Singer, basado en el libro First Man: The Life of Neil A. Armstrong de James R. Hansen.',
            wiki: 'https://es.wikipedia.org/wiki/First_Man',
            img: 'assets/img/first.jpg',
            fecha: '11 de Octubre de 2018',
            director: 'Damien Chazelle',
            duracion: '2h 21m',
          },
          {
            nombre: 'Ha nacido una Estrella',
            bio: 'A Star Is Born es una película estadounidense de romance, drama y musical dirigida por Bradley Cooper. Es la tercera adaptación cinematográfica de A Star Is Born, que fue dirigida por William A. Wellman. El filme es protagonizado por Bradley Cooper, Lady Gaga, Sam Elliott, Andrew Dice Clay y Dave Chappelle.',
            wiki: 'https://es.wikipedia.org/wiki/Ha_nacido_una_estrella_(desambiguaci%C3%B3n)',
            img: 'assets/img/nacido.jpg',
            fecha: '4 de Octubre de 2018',
            director: 'Bradley Cooper',
            duracion: '2h 14m',
          },
          {
            nombre: 'Bohemian Rhapsody',
            bio: 'Bohemian Rhapsody es una película biográfica británica-estadounidense de 2018 sobre el cantante británico Freddie Mercury y el grupo de rock Queen.?',
            wiki: 'https://es.wikipedia.org/wiki/Bohemian_Rhapsody_(pel%C3%ADcula)',
            img: 'assets/img/bohemian.jpg',
            fecha: '24 de Octubre de 2018',
            director: 'Bryan Singer',
            duracion: '2h 15m',
          },
          {
            nombre: 'Night School',
            bio: 'Night School es una película estadounidense de comedia dirigida por Malcolm D. Lee y protagonizada por Kevin Hart, Tiffany Haddish, Rob Riggle, Taran Killam, Romany Malco, Keith David, y Loretta Devine. Hart también produce la película junto Will Packer, e igualmente co-escribió el guion.',
            wiki: 'https://es.wikipedia.org/wiki/Night_School',
            img: 'assets/img/night.jpg',
            fecha: '28 de Septiembre de 2018',
            director: 'Malcolm D.lee',
            duracion: '1h 51m',
          },
          {
            nombre: 'La buena Esposa',
            bio: 'Joan lleva 40 años casada con Joe, un escritor prestigioso. Joan ha sacrificado sus sueños en pos de la supervivencia de su matrimonio, pero, cuando a Joe van a concederle el premio Nobel, Joan no puede soportarlo más y altera el orden de las cosas.',
            wiki: 'https://es.wikipedia.org/wiki/La_buena_esposa',
            img: 'assets/img/buena.jpg',
            fecha: '2 de Agosto de 2018',
            director: 'Björn Runge',
            duracion: '1h 40m',
          }
    ];

    constructor() {
        console.log('Servicio Peliculas Correcto');
    }

    getPeliculas(): Pelicula[] {
        return this.peliculas;
    }
    getPelicula( idx: string) {
      return this.peliculas[idx];
    }
    buscarPeli( termino: string ) {
      const PELICULASARR: Pelicula[] = [];
      termino = termino.toLowerCase();

      for ( let i = 0; i < this.peliculas.length; i++) {
        const PELICULA = this.peliculas[i];
        const NOMBRE = PELICULA.nombre.toLowerCase();
        if ( NOMBRE.indexOf ( termino ) >= 0 ) {
          PELICULA.idx = i;
          PELICULASARR.push ( PELICULA );
       }
      }
      return PELICULASARR;
    }

}

export interface Pelicula {
    idx?: number;
    nombre: string;
    bio: string;
    wiki: string;
    img: string;
    fecha: any;
    director: string;
    duracion: any;
}

