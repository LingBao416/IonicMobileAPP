import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CourseServiceProvider } from '../../providers/course-service/course-service';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  courses = [];
  lessons = [];
  constructor(public navCtrl: NavController,private courseService:CourseServiceProvider) {
    this.getCourses();
    this.getLessons();
  }
  getCourses(){
    this.courseService.getCourses().subscribe(data =>this.courses = data);
  }
  getLessons(){
    this.courseService.getLessons().subscribe(data =>this.lessons = data);
  }
}
