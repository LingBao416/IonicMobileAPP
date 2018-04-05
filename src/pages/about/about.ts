import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CourseServiceProvider } from '../../providers/course-service/course-service';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  courses = [];
  constructor(public navCtrl: NavController,private courseService:CourseServiceProvider) {
    this.getCourses();
  }
  getCourses(){
    this.courseService.getCourses().subscribe(data =>this.courses = data);
  }
}
