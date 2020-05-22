import { Injectable } from "@angular/core";
import { Pelicula } from "../models/peliculas";

@Injectable()
export class PeliculaService {
  public peliculas: Pelicula[];

  constructor() {
    this.peliculas = [
      // tslint:disable-next-line:max-line-length
      new Pelicula(
        'Los vengadores: Endgame',
        2016,
        'https://as.com/tikitakas/imagenes/2019/04/26/portada/1556258369_131914_1556258703_noticia_normal.jpg'
      ),
      // tslint:disable-next-line:max-line-length
      new Pelicula(
        'Spiderman 4',
        2017,
        'https://as.com/meristation/imagenes/2019/08/25/noticias/1566717212_191664_1566717436_noticia_normal.jpg'
      ),
      // tslint:disable-next-line:max-line-length
      new Pelicula(
        'Batman vs Superman',
        2018,
        // tslint:disable-next-line: max-line-length
        'https://vignette.wikia.nocookie.net/doblaje/images/d/de/Batman_vs_Superman_Poster_Final.png/revision/latest?cb=20160326040156&path-prefix=es'
      ),
    ];
  }

  holaMundo() {
    return 'Hola mundo desde el servicio de Angular';
  }

  getPeliculas() {
      return this.peliculas;
  }
}
