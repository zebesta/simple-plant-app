import { Component } from '@angular/core';
import { Plant } from './plant'
import { PlantsComponent } from './plants.component'

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
})
export class AppComponent {
  title = 'Simple Plant App!!!';
  plant: Plant = {"_id":"57a8ac953200c113b0000002","type":"vegetable","color":"Orange","name":"Carrot","__v":0};
}
