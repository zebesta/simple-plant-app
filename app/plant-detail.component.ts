import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Plant } from './plant'
import { PlantService } from './plant.service'

@Component({
  selector: 'my-plant-detail',
  templateUrl: 'app/plant-detail.component.html',
  styleUrls: ['app/plant-detail.component.css']
})

export class PlantDetailComponent implements OnInit{
  constructor(
    private plantService: PlantService,
    private route: ActivatedRoute
  ){}
  @Input()
  plant: Plant;

  @Output()
  close = new EventEmitter();
  error:any;
  navigated = false;

  ngOnInit(): void{
    this.route.params.forEach((params: Params)=>{
      if(params['_id']!==undefined){
        let _id = params['_id'];
        this.navigated = true;
        this.plantService.getPlant(_id)
          .then(plant => this.plant = plant);
      }else{
        this.navigated = false;
        this.plant = new Plant();
      }
    });
  }

  // save(): void {
  //   this.plantService
  //     .save(this.plant)
  //     .then(plant=>{
  //       this.plant = plant; //saved hero with ID if new
  //       this.goBack(plant);
  //     })
  //     .catch(error => this.error = error); //TODO display error message here
  // }
  //
  // goBack(savedPlant: Plant = null): void {
  //   this.close.emit(savedPlant);
  //   if (this.navigated) { window.history.back(); }
  // }
}
