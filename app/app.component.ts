import { Component } from '@angular/core';
import { Plant } from './plant'
import { PlantsComponent } from './plants.component'
import './rxjs-extensions';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
})
export class AppComponent {
  title = 'Simple Plant App!!!';
}
