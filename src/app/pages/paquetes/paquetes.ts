import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-paquetes',
  imports: [RouterLink],
  templateUrl: './paquetes.html',
  styleUrl: './paquetes.css'
})

export class Paquetes {
  currentSlide = 0;
  slides = [0, 1, 2];  // Array de slides para mejor control

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    console.log('Next slide:', this.currentSlide);  // Para depuración
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
    console.log('Prev slide:', this.currentSlide);  // Para depuración
  }
}