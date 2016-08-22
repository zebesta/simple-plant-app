import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { Plant } from './plant';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class PlantService {
  constructor (private http: Http){};

  private plantsUrl = ''
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  getPlants(){
    return this.http.get(this.plantsUrl)
      .toPromise()
      .then(response => response.json().data as Plant[])
      .catch(this.handleError);
  }
}
