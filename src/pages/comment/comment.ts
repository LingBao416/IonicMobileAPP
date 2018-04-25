import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CommentServiceProvider } from '../../providers/comment-service/comment-service';
/**
 * Generated class for the CommentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-comment',
  templateUrl: 'comment.html',
})
export class CommentPage {
  comments = [];
  public username:string;
  constructor(public navCtrl: NavController,private commentService:CommentServiceProvider) {
    this.getComments();
    this.username =window.localStorage.getItem('username');
    console.log(window.localStorage.getItem('username'))
  }
  getComments(){
    this.commentService.getComments().subscribe(data =>this.comments = data);
  }
  saveComments(name, comment){
    this.navCtrl.setRoot(CommentPage);
    let p = this.commentService.saveComments(window.localStorage.getItem('username'),comment);
    p.then(data =>{
      console.log(JSON.stringify(data.json()))
    })
    this.navCtrl.setRoot(CommentPage);
  }


}
