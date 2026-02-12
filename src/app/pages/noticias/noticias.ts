import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-noticias',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './noticias.html',
  styleUrl: './noticias.css',
})
export class NoticiasComponent {
  // 1. Variable para controlar qué noticia se muestra en el mini cuadro
  noticiaSeleccionada: any = null;

  // 2. Arreglo de datos (Simulando una base de datos)
  noticias = [
    {
      id: 1,
      titulo: 'Dupla Goleadora',
      img: 'assets/lewandowski.jpg',
      resumen: 'Lamine Yamal y Lewandowski celebran una nueva victoria en la liga.'
    },
    {
      id: 2,
      titulo: 'Estadio El Campín',
      img: 'assets/estadio.jpg',
      resumen: 'Vista aérea del estadio listo para la jornada de clásicos del fin de semana.'
    },
    {
      id: 3,
      titulo: 'Liga BetPlay',
      img: 'assets/trofeo.jpg',
      resumen: 'Se definen los horarios para la gran final del torneo colombiano.'
    },
    {
      id: 4,
      titulo: 'Champions League',
      img: 'assets/champions.jpg',
      resumen: 'El trofeo más deseado de Europa inicia su fase de eliminación directa.'
    },
    {
      id: 5,
      titulo: 'Copa del Mundo 2026',
      img: 'assets/mundial.jpg',
      resumen: 'Nuevos detalles sobre las sedes del próximo mundial en Norteamérica.'
    },
    {
      id: 6,
      titulo: 'Real Madrid CF',
      img: 'assets/madrid.jpg',
      resumen: 'Bellingham y sus compañeros celebran el pase a la siguiente ronda.'
    }
  ];

  // 3. Función para asignar la noticia y mostrar el cuadro
  abrirNoticia(noticia: any) {
    this.noticiaSeleccionada = noticia;
  }

  // 4. Función para limpiar la selección y ocultar el cuadro
  cerrarNoticia() {
    this.noticiaSeleccionada = null;
  }
}