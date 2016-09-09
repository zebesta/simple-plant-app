import { Component } from '@angular/core';

import { Image } from './image.interface';

@Component({
  selector: 'carousel-component',
  templateUrl: 'app/carousel.component.html',
  styleUrls: ['app/carousel.component.css']
})

export class CarouselComponent {
  public images = IMAGES;

}

var IMAGES: Image[] = [
  { "title": "Tomato", "url": "images/tomato.jpg"},
  { "title": "Basil", "url": "images/basil.jpg"},
  { "title": "Watermelon", "url": "images/watermelon.jpg"}
];
