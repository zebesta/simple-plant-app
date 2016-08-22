import { Component, OnInit } from '@angular/core';
import { Plant } from './plant';
import { PlantService } from './plant.service';

@Component({
  selector: 'my-plants',
  templateUrl: 'app/plants.component.html',
  styleUrls: ['app/plants.component.css'],
  providers: [PlantService]
})
export class PlantsComponent implements OnInit {
  plants: Plant[];
  selectedPlant: Plant;
  error: any;

  constructor(
    private plantService: PlantService
  ){}


  onSelect(plant: Plant){
    this.selectedPlant = plant;
  }
  getPlants() {
    this.plantService.getPlants().then(plants => this.plants = plants);
  }
  ngOnInit() {
    this.getPlants();
  }

}

const PLANTS: Plant[] = [
  {"_id":"57a8ac953200c113b0000002","type":"vegetable","color":"Orange","name":"Carrot","__v":0},
  {"_id":"57a8b0a33200c113b0000005","type":"vegetable","color":"purple","name":"beets","__v":0},
  {"_id":"57aa0cf1d7f42e3307000001","type":"vegetable","color":"orange","name":"pumpkin","__v":0},
  {"_id":"57aa0d1e8c44144107000001","type":"vegetable","color":"orange","name":"pumpkin2","__v":0},
  {"_id":"57aa0d258c44144107000002","type":"vegetable","color":"orange","name":"pumpkin3","__v":0},
  {"_id":"57aa0da7a223ba4407000001","type":"vegetable","color":"orange","name":"pumpkin4","__v":0}
]
