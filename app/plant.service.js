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
var mock_plants_1 = require('./mock-plants');
// import 'rxjs/add/operator/toPromise';
var PlantService = (function () {
    function PlantService() {
    }
    // constructor (private http: Http){};
    //
    // private plantsUrl = 'http://localhost:8080/api/plants'
    // private handleError(error: any): Promise<any> {
    //   console.error('An error occurred', error);
    //   return Promise.reject(error.message || error);
    // }
    PlantService.prototype.getPlants = function () {
        return Promise.resolve(mock_plants_1.PLANTS);
    };
    PlantService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], PlantService);
    return PlantService;
}());
exports.PlantService = PlantService;
//# sourceMappingURL=plant.service.js.map