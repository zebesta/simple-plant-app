import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';

import { Plant } from './plant';
import { PlantService } from './plant.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/dashboard.component.html',
})



export class DashboardComponent implements OnInit {
  constructor(
    private plantService: PlantService
    // private router: Router
  ){}

  plants: Plant[] = [];

  ngOnInit(){
    this.plantService.getPlants().then(plants => this.plants = plants.slice(1,5));
  }

  goToDetail(plant: Plant){
    let link = ['detail', plant._id];
    // this.router.navigate(link);
  }

}
