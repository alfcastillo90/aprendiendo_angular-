import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { Pelicula } from '../../models/peliculas';
import { PeliculaService } from '../../services/peliculas.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
  providers: [PeliculaService]
})
export class PeliculasComponent implements OnInit, DoCheck, OnDestroy {

  public titulo: string;
  public peliculas: Pelicula[];
  public favorita: Pelicula;
  public fecha: any;

  constructor(
    // tslint:disable-next-line: variable-name
    private _peliculaService: PeliculaService
  ) {
    this.titulo = 'Componente peliculas';
    this.peliculas = this._peliculaService.getPeliculas();
    this.fecha = new Date(2020, 9, 2);
  }

  ngOnInit() {
    console.log('componente iniciado');
    console.log(this.peliculas);
    console.log(this._peliculaService.holaMundo());
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

  mostrarFavorita(event) {
    this.favorita = event.pelicula;
  }

}
