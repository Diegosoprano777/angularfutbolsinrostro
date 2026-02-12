import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
})
export class InicioComponent implements OnInit {

  imagenes: string[] = [
    'assets/futbol1.jpg',
    'assets/futbol2.jpg',
    'assets/futbol3.jpg'
  ];

  indiceActual: number = 0;

  ngOnInit() {
    setInterval(() => {
      this.siguiente();
    }, 4000); // cambia cada 4 segundos
  }

  siguiente() {
    this.indiceActual = (this.indiceActual + 1) % this.imagenes.length;
  }

  anterior() {
    this.indiceActual =
      (this.indiceActual - 1 + this.imagenes.length) % this.imagenes.length;
  }

  irA(indice: number) {
    this.indiceActual = indice;
  }
}
