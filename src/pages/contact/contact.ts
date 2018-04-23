import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TeacherServiceProvider } from '../../providers/teacher-service/teacher-service';
import { Data } from '../../providers/data/data';
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  searchTerm: string = '';
  teachers: any;
  
  constructor(public navCtrl: NavController,private teacherService:TeacherServiceProvider, public dataService: Data) {
    this.getTeachers();
    this.setFilteredItems();
  }
  getTeachers(){
    this.teacherService.getTeachers().subscribe(data =>this.teachers = data);
  }
  setFilteredItems() {
    this.teachers = this.dataService.filterTeachers(this.searchTerm);
    
       }
}
