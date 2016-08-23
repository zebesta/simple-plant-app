import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Plant } from './plant'
import { PlantService } from './plant.service'

@Component({
  selector: 'my-plant-detail',
  templateUrl: 'app/plant-detail.component.html',
  styleUrls: ['app/plant-detail.component.css']
})

export class PlantDetailComponent implements OnInit{
  constructor(
    private plantService: PlantService
  ){}
  @Input()
  plant: Plant;

  @Output()
  close = new EventEmitter();
  error:any;
  navigated = false;

  ngOnInit(): void{
    this.navigated = false;
    this.plant = new Plant();
    // this.route.params.forEach((params: Params)=>{
    //   if(params['_id']!==undefined){
    //     let id = +params['_id'];
    //     this.navigated = true;
    //     this.plantService.getPlant(_id)
    //       .then(plant => this.plant = plant);
    //   }else{
    //     this.navigated = false;
    //     this.plant = new Plant();
    //   }
    // })
  }
}
