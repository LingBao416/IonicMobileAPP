import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProgramServiceProvider } from '../../providers/program-service/program-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
programs = [];

  constructor(public navCtrl: NavController, private programService:ProgramServiceProvider) {
   this.getPrograms();
   console.log(window.localStorage.getItem('username'))
  }

  getPrograms(){
    this.programService.getPrograms().subscribe(data =>this.programs = data);
  }

}
