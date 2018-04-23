import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
 
@Injectable()
export class Data {
 
    teachers: any;
 
    constructor(public http: Http) {
 
        this.teachers = [
            {name:"Zaytsev Viktor",url:"https://e.centennialcollege.ca/d2l/common/viewprofileimage.d2l?oi=6606&ui=2629&s=50&lm=636197800760730000&v=11&cui=131380&v=10.7.11.10424-224",course:"Samsung Adv Android Devpmt",desc:"Software Developer interested in modern software architectures and effective Agile methodology."},
            {name:"Pawluk Przemyslaw",url:"http://www.cse.yorku.ca/~pawluk/images/ME.JPG",course:"Mobile Web Development",desc:"C++, MFC, Oracle SQL/PLSQL, Java, JSP, HTML, WebServices."},
            {name:"Tsiliopoulos Tom",url:"https://e.centennialcollege.ca/d2l/common/viewprofileimage.d2l?oi=6606&ui=94057&s=50&lm=635580731347800000&v=11&cui=131380&v=10.7.11.10424-224",course:"Advanced iOS Development",desc:"An innovative educator and software developer with more than 15 years of progressive performance coaching, technical and business expertise."},
            {name:"Lai Charles",url:"",course:"Emerging Technologies",desc:"Solutions Engineer at Google."},
        ]
 
    }
 
    filterTeachers(searchTerm){
 
        return this.teachers.filter((teacher) => {
             return teacher.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });    
 
    }
 
}