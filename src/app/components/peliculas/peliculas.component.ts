import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit, DoCheck, OnDestroy {

  public titulo: string;
  public peliculas: Array<any>;

  constructor() {
    this.titulo = 'Componente peliculas';
    this.peliculas =  [
      // tslint:disable-next-line:max-line-length
      {title: 'Los vengadores: Endgame', image: 'https://as.com/tikitakas/imagenes/2019/04/26/portada/1556258369_131914_1556258703_noticia_normal.jpg'},
      // tslint:disable-next-line:max-line-length
      {title: 'Spiderman 4', image: 'https://as.com/meristation/imagenes/2019/08/25/noticias/1566717212_191664_1566717436_noticia_normal.jpg'},
      // tslint:disable-next-line:max-line-length
      {title: 'Batman vs Superman', image: 'https://vignette.wikia.nocookie.net/doblaje/images/d/de/Batman_vs_Superman_Poster_Final.png/revision/latest?cb=20160326040156&path-prefix=es'}
    ];
  }

  ngOnInit() {
    console.log('componente iniciado');
  }

  ngDoCheck() {
    console.log('do check lanzado');
  }

  cambiarTitulo() {
    this.titulo = 'El título ha sido cambiado';
  }

  ngOnDestroy() {
    console.log('el componente se va a eliminar de la ejecucion');
  }

}
