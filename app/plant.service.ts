import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';

import { Plant } from './plant';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PlantService {
  constructor (private http: Http){};

  private plantsUrl = 'http://localhost:8080/api/plants'
  private extractData(res: Response){
    let body = res.json();
    // return body.data || { };
    return body;
  }
  private handleError (error: any) {
    console.log("Error!!! " + error);
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Promise.reject(errMsg);
  }

  getPlants(): Promise<Plant[]>{
    return this.http.get(this.plantsUrl)
              .toPromise()
              .then(this.extractData)
              .catch(this.handleError);
  }
  getPlant(_id: string){
    return this.getPlants()
      .then(plants => plants.find(plant => plant._id === _id));
  }

  addPlant(name: string, type: string, color: string): Promise<Plant> {
    let body = JSON.stringify({ name, type, color });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.plantsUrl, body, options)
               .toPromise()
               .then(this.extractData)
               .catch(this.handleError);
  }
  delete(plant: Plant): Promise<Response> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let url = `${this.plantsUrl}/${plant._id}`;
    console.log("Trying to delete plant with url: "+ url);
    return this.http
      // .delete(url, {headers: headers})
      .delete(url)
      .toPromise()
      .catch(this.handleError);
  }


}
