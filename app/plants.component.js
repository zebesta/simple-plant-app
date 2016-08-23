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
var plant_service_1 = require('./plant.service');
var PlantsComponent = (function () {
    function PlantsComponent(plantService) {
        this.plantService = plantService;
    }
    PlantsComponent.prototype.onSelect = function (plant) {
        this.selectedPlant = plant;
    };
    PlantsComponent.prototype.getPlants = function () {
        var _this = this;
        this.plantService.getPlants()
            .then(function (plants) { return _this.plants = plants; }, function (error) { return _this.errorMessage = error; });
    };
    PlantsComponent.prototype.addPlant = function () {
        this.addingPlant = true;
        this.selectedPlant = null;
    };
    //addPlant (name: string, type: string, color: string) {
    // if (!name) { return; }
    // this.plantService.addPlant(name, type, color)
    //                  .then(
    //                    plant  => this.plants.push(plant),
    //                    error =>  this.errorMessage = <any>error);
    //}
    PlantsComponent.prototype.ngOnInit = function () {
        this.getPlants();
    };
    PlantsComponent.prototype.goToDetail = function () {
        console.log("Trying to go to detail?!? " + this.selectedPlant.name);
    };
    PlantsComponent = __decorate([
        core_1.Component({
            selector: 'my-plants',
            templateUrl: 'app/plants.component.html',
            styleUrls: ['app/plants.component.css'],
            providers: [plant_service_1.PlantService]
        }), 
        __metadata('design:paramtypes', [plant_service_1.PlantService])
    ], PlantsComponent);
    return PlantsComponent;
}());
exports.PlantsComponent = PlantsComponent;
var PLANTS = [
    { "_id": "57a8ac953200c113b0000002", "type": "vegetable", "color": "Orange", "name": "Carrot", "__v": 0 },
    { "_id": "57a8b0a33200c113b0000005", "type": "vegetable", "color": "purple", "name": "beets", "__v": 0 },
    { "_id": "57aa0cf1d7f42e3307000001", "type": "vegetable", "color": "orange", "name": "pumpkin", "__v": 0 },
    { "_id": "57aa0d1e8c44144107000001", "type": "vegetable", "color": "orange", "name": "pumpkin2", "__v": 0 },
    { "_id": "57aa0d258c44144107000002", "type": "vegetable", "color": "orange", "name": "pumpkin3", "__v": 0 },
    { "_id": "57aa0da7a223ba4407000001", "type": "vegetable", "color": "orange", "name": "pumpkin4", "__v": 0 }
];
//# sourceMappingURL=plants.component.js.map