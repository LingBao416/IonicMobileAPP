import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TeacherServiceProvider } from '../../providers/teacher-service/teacher-service';
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  teachers = [];
  constructor(public navCtrl: NavController,private teacherService:TeacherServiceProvider) {
    this.getTeachers();
  }
  getTeachers(){
    this.teacherService.getTeachers().subscribe(data =>this.teachers = data);
  }
}
