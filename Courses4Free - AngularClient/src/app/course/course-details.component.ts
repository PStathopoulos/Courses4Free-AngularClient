import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from './course';
import { HttpCourseService } from './http-course.service'

//Component used for detailed presentation of a particular course
@Component({
  selector: 'course-details',
  templateUrl: './course-details.component.html',
  styleUrls:  ['./course-details.component.css']
})

export class CourseDetailsComponent{
  course: Course;
  //Initialize page title
  pageTitle: string = 'Product Detail:';
  errorMessage: string;

  //Injection of ActivatedRoute, Router, HttpCourseService via Constructor
  constructor(private _route: ActivatedRoute, private _router: Router, private _httpService: HttpCourseService){}

  //Lifecycle hook - method executing on the Component Initialization
  ngOnInit():void {
    // Takes the id parameter of the route
    let id = +this._route.snapshot.params['id'];
    // Appends this parameter to title of the page
    this.pageTitle +=` ${id}`;
    // Calls the method for fetching the course with this id
    this.getCourseById(id);
  }

  // Method for fetching the course from api database
  getCourseById(id: number) {
        this._httpService.getCourseById(id).subscribe(
            course => this.course = course,
            error => this.errorMessage = <any>error);
    }

  // Method executing after click event of 'Back' button
  onBack(): void {
       this._router.navigate(['/courses']);
   }



}
