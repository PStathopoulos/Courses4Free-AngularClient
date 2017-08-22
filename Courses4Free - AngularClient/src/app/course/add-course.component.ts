import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from './course';
import { HttpCourseService} from './http-course.service'

//Component used for adding a course (with filling a form) to database of the api
@Component({
  selector: 'add-course',
  templateUrl: './add-course.component.html',
  styleUrls:  ['./add-course.component.css']
})

export class AddCourseComponent {
  //Initialize Course
  course: Course = {
    id:0,
    UUid:'',
    title: '',
    category: '',
    description: '',
    subject: '',
    dateCreated: '',
	  photoUrl: '',
    teachers: [],
    students: [],
	  links: []
    };
  errorMessage: string;

  //Inject HttpCourseService via Constructor in order to use it for adding a course
  constructor(private _httpService: HttpCourseService){}

  //Function executing after submit the form with specific course details.
  //It subscribes to observable in order to get data from this.
   onCreate(): void {
     this._httpService.addCourse(this.course)
    .subscribe(course => this.course = course,
     error => this.errorMessage = <any> error);
     }


  }
