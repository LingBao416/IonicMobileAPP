import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { CommentPage } from '../pages/comment/comment';
import { LoginPage } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';
//http request
import { HttpModule} from '@angular/http'
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ProgramServiceProvider } from '../providers/program-service/program-service';
import { CourseServiceProvider } from '../providers/course-service/course-service';
import { TeacherServiceProvider } from '../providers/teacher-service/teacher-service';
import { CommentServiceProvider } from '../providers/comment-service/comment-service';
import { Data } from '../providers/data/data';
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    CommentPage,
    LoginPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    CommentPage,
    LoginPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProgramServiceProvider,
    CourseServiceProvider,
    TeacherServiceProvider,
    CommentServiceProvider,
    Data
  ]
})
export class AppModule {}
