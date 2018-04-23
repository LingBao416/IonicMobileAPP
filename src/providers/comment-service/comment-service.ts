import { Http, Response,RequestOptions,Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

/*
  Generated class for the CommentServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CommentServiceProvider {

  constructor(private http: Http) {
    console.log('Hello CommentServiceProvider Provider');
  }
  getComments(){
    return this.http.get('http://localhost:8080/api/comments')
    .do(this.logResponse)
    .map(this.extractData)
  }
  saveComments(data){
    let header = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept' : 'application/json'
  }
);
    let options  = new RequestOptions({
      headers: header
    })
    return this.http.post('http://localhost:8080/api/comments',JSON.stringify(data),options)
    
  }

  private logResponse(res: Response){
    console.log(res);
  }

  private extractData(res: Response){
    return res.json();
  }

}
