"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var plant_1 = require('./plant');
var plant_service_1 = require('./plant.service');
var PlantDetailComponent = (function () {
    function PlantDetailComponent(plantService) {
        this.plantService = plantService;
        this.close = new core_1.EventEmitter();
        this.navigated = false;
    }
    PlantDetailComponent.prototype.ngOnInit = function () {
        this.navigated = false;
        this.plant = new plant_1.Plant();
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
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', plant_1.Plant)
    ], PlantDetailComponent.prototype, "plant", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], PlantDetailComponent.prototype, "close", void 0);
    PlantDetailComponent = __decorate([
        core_1.Component({
            selector: 'my-plant-detail',
            templateUrl: 'app/plant-detail.component.html',
            styleUrls: ['app/plant-detail.component.css']
        }), 
        __metadata('design:paramtypes', [plant_service_1.PlantService])
    ], PlantDetailComponent);
    return PlantDetailComponent;
}());
exports.PlantDetailComponent = PlantDetailComponent;
//# sourceMappingURL=plant-detail.component.js.map