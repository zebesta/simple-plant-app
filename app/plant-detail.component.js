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
var router_1 = require('@angular/router');
var plant_1 = require('./plant');
var plant_service_1 = require('./plant.service');
var PlantDetailComponent = (function () {
    function PlantDetailComponent(plantService, route) {
        this.plantService = plantService;
        this.route = route;
        this.types = ['herb', 'vegetable', 'fruit', 'flower'];
        this.close = new core_1.EventEmitter();
        this.navigated = false;
    }
    PlantDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            if (params['_id'] !== undefined) {
                var _id = params['_id'];
                _this.navigated = true;
                _this.plantService.getPlant(_id)
                    .then(function (plant) { return _this.plant = plant; });
            }
            else {
                _this.navigated = false;
                _this.plant = new plant_1.Plant();
            }
        });
    };
    PlantDetailComponent.prototype.save = function () {
        var _this = this;
        console.log("Trying to save plant " + this.plant.name);
        this.plantService
            .save(this.plant)
            .then(function (plant) {
            _this.plant = plant; //saved plant with ID if new
            _this.goBack(plant);
        })
            .catch(function (error) { return _this.error = error; }); //TODO display error message here
    };
    PlantDetailComponent.prototype.goBack = function (savedPlant) {
        if (savedPlant === void 0) { savedPlant = null; }
        this.close.emit(savedPlant);
        if (this.navigated) {
            window.history.back();
        }
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
        __metadata('design:paramtypes', [plant_service_1.PlantService, router_1.ActivatedRoute])
    ], PlantDetailComponent);
    return PlantDetailComponent;
}());
exports.PlantDetailComponent = PlantDetailComponent;
//# sourceMappingURL=plant-detail.component.js.map