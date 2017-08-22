import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MainMenuComponent } from './menu/main-menu.component';
import { FooterMenuComponent } from './menu/footer-menu.component';
import { CourseDetailsComponent } from './course/course-details.component';
import { CourseListComponent } from './course/courselist.component';
import { AddCourseComponent }  from './course/add-course.component';
import { LoginComponent }  from './registration-login/login.component';

import { HttpCourseService } from './course/http-course.service';
import { HttpLoginService } from './registration-login/http-login.service';

import { CONST_ROUTING } from './menu/app.routing';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainMenuComponent,
    FooterMenuComponent,
    CourseDetailsComponent,
    CourseListComponent,
    AddCourseComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CONST_ROUTING
  ],
  providers: [HttpCourseService, HttpLoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
