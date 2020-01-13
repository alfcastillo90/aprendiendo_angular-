import { Component } from '@angular/core';

@Component({
  selector: 'app-mi-componente',
  templateUrl: './mi-componente.component.html'
})
export class MiComponenteComponent {

  public titulo: string;
  public comentario: string;
  public year: number;

  constructor() {
    this.titulo = 'Hola mundo,soy un componente';
    this.comentario = 'Este es mi primer componente';
    this.year = 2020;
    console.log('Mi componente cargado');
    console.log(this.titulo, this.comentario, this.year);
  }
}
