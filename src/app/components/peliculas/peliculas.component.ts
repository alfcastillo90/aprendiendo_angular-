import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit, DoCheck, OnDestroy {

  public titulo: string;

  constructor() {
    this.titulo = 'Componente peliculas';
    console.log('componente lanzado');
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
