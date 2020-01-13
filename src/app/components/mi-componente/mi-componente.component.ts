import { Component, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-mi-componente',
  templateUrl: './mi-componente.component.html'
})
export class MiComponenteComponent {

  public titulo: string;
  public comentario: string;
  public year: number;
  public mostrarPeliculas: boolean;

  constructor() {
    this.comentario = 'Este es mi primer componente';
    this.mostrarPeliculas = true;
    this.titulo = 'Hola mundo,soy un componente';
    this.year = 2020;
    console.log('Mi componente cargado');
    console.log(this.titulo, this.comentario, this.year);
    console.log(this.mostrarPeliculas);
  }

  ocultarPeliculas() {
    this.mostrarPeliculas = false;
  }

}
