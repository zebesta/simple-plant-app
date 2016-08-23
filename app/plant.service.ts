import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { Plant } from './plant';
import { PLANTS } from './mock-plants';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PlantService {
  constructor (private http: Http){};

  private plantsUrl = 'http://localhost:8080/api/plants'

  getPlants(): Promise<Plant[]>{
    return this.http.get(this.plantsUrl)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }
private extractData(res: Response){
    let body = res.json();
    return body.data || { };
  }

  private handleError (error: any) {
  // In a real world app, we might use a remote logging infrastructure
  // We'd also dig deeper into the error to get a better message
  let errMsg = (error.message) ? error.message :
    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
  console.error(errMsg); // log to console instead
  return Promise.reject(errMsg);
}

  // getPlants(){
  //   return Promise.resolve(PLANTS);
  // }
}
