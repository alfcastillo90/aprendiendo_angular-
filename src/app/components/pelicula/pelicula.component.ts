import { Component, EventEmitter,OnInit, Input, Output } from '@angular/core';
import { Pelicula } from 'src/app/models/peliculas';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  @Input() pelicula: Pelicula;
  @Output() MarcarFavorita = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  seleccionar(event, pelicula) {
    console.log(pelicula);
    this.MarcarFavorita.emit({
      pelicula
    });
  }

}
