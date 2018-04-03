import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

/*
  Generated class for the ProgramServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProgramServiceProvider {

  constructor(private http: Http) {
    console.log('Hello ProgramServiceProvider Provider');
  }
  getPrograms(){
    return this.http.get('http://localhost:8080/api/programs')
    .do(this.logResponse)
    .map(this.extractData)
  }

  
  

  private logResponse(res: Response){
    console.log(res);
  }

  private extractData(res: Response){
    return res.json();
  }
}
