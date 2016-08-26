import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

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
  errorMessage: any;
  addingPlant: boolean;

  constructor(
    private plantService: PlantService,
    private router: Router
  ){}


  onSelect(plant: Plant){
    this.selectedPlant = plant;
  }
  getPlants() {
    this.plantService.getPlants()
      .then(
        plants => this.plants = plants,
        error => this.errorMessage = <any>error);
  }
  addPlant():void{
    this.addingPlant = true;
    this.selectedPlant = null;
  }
  deletePlant(plant: Plant, event: any){
    console.log("deleting plant "+ plant.name + " with id: "+plant._id);
    event.stopPropagation();
    this.plantService
      .delete(plant)
      .then(res=>{
        this.plants = this.plants.filter(p => p!==plant);
        if(this.selectedPlant === plant){
          this.selectedPlant = null;
        }
      })
      .catch(error => {
        this.errorMessage = error;
      });
  }
  //addPlant (name: string, type: string, color: string) {
    // if (!name) { return; }
    // this.plantService.addPlant(name, type, color)
    //                  .then(
    //                    plant  => this.plants.push(plant),
    //                    error =>  this.errorMessage = <any>error);
  //}
  ngOnInit() {
    this.getPlants();
  }
  goToDetail(){
    let link = ['detail', this.selectedPlant._id];
    this.router.navigate(link);
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
