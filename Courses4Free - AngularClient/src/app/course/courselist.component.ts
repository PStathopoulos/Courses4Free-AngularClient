import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from './course';
import { HttpCourseService} from './http-course.service'

// Component used for the presentation of the list of courses
@Component({
  selector: 'course-list',
  templateUrl: './courselist.component.html',
  styleUrls:  ['./courselist.component.css']
})

export class CourseListComponent implements OnInit{
  courses: Course[];
  errorMessage: string;

  // Injection of Router and HttpCourseService via Constructor
  constructor(private _httpService: HttpCourseService, private _router: Router ){}

  // Lifecycle hook - method executing on the Component Initialization
  ngOnInit(): void {
    // Subscribe to Observable returned by httpService in order to get the list of Courses
    this._httpService.getAllCourses()
    .subscribe(courses => this.courses = courses,
      error => this.errorMessage = <any> error);
    }
    // Method that executes when click event occurs (on Add Course Button)
    onAdd(): void {
      this._router.navigate(['/addcourse']);
      }

    }
