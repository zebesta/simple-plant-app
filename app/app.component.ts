import { Component } from '@angular/core';
import { Plant } from './plant'
import { PlantsComponent } from './plants.component'

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>{{plant.name}} details!</h2>
    <div><label>id: </label>{{plant.id}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="plant.name" placeholder="name">
    </div>
    <my-plants></my-plants>
    `
})
export class AppComponent {
  title = 'Simple Plant App!!!';
  plant: Plant = {
    id: 1,
    name: 'BASIL'
  };
}
