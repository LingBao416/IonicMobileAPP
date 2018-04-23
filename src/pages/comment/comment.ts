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
    this.username= window.localStorage.getItem('username');
  }
  getComments(){
    this.commentService.getComments().subscribe(data =>this.comments = data);
  }
  saveComment(){
    this.commentService.saveComments(this.comments)
  }


}
