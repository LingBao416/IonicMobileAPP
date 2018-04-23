import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from "../tabs/tabs";

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  logIn(username: HTMLInputElement, password : HTMLInputElement) {
    if(username.value.length > 0) {
        console.log(username.value);
    }
    if(password.value.length > 0 ) {
      console.log(password.value);
    }
    if(username.value == '300901785' && password.value == '123123') {
      window.localStorage.setItem('username',username.value);//保存登录时数据
      this.navCtrl.setRoot(TabsPage);//跳转到登录后的页面
    }
  }

}
