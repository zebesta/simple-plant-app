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
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var PlantService = (function () {
    function PlantService(http) {
        this.http = http;
        this.plantsUrl = 'http://localhost:8080/api/plants';
    }
    ;
    PlantService.prototype.extractData = function (res) {
        var body = res.json();
        // return body.data || { };
        return body;
    };
    PlantService.prototype.handleError = function (error) {
        console.log("Error!!! " + error);
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Promise.reject(errMsg);
    };
    PlantService.prototype.getPlants = function () {
        return this.http.get(this.plantsUrl)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    PlantService.prototype.getPlant = function (_id) {
        return this.getPlants()
            .then(function (plants) { return plants.find(function (plant) { return plant._id === _id; }); });
    };
    PlantService.prototype.addPlant = function (name, type, color) {
        var body = JSON.stringify({ name: name, type: type, color: color });
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.plantsUrl, body, options)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    PlantService.prototype.delete = function (plant) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var url = this.plantsUrl + "/" + plant._id;
        console.log("Trying to delete plant with url: " + url);
        return this.http
            .delete(url)
            .toPromise()
            .catch(this.handleError);
    };
    PlantService.prototype.save = function (plant) {
        if (plant._id) {
            return this.put(plant);
        }
        return this.post(plant);
    };
    PlantService.prototype.put = function (plant) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        console.log("In the put from service!!!");
        var url = this.plantsUrl + "/" + plant._id;
        var body = JSON.stringify({ plant: plant });
        var options = new http_1.RequestOptions({ headers: headers });
        console.log(body);
        return this.http
            .put(url, body, options)
            .toPromise()
            .then(function () { return plant; })
            .catch(this.handleError);
    };
    PlantService.prototype.post = function (plant) {
        console.log("In the post from service!!!");
        var headers = new http_1.Headers({
            'Content-Type': 'application/json' });
        return this.http
            .post(this.plantsUrl, JSON.stringify(plant), { headers: headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    PlantService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], PlantService);
    return PlantService;
}());
exports.PlantService = PlantService;
//# sourceMappingURL=plant.service.js.map