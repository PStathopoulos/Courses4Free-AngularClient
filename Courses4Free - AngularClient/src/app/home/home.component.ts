import { Component, OnInit } from '@angular/core';
import { Course } from './../course/course';
import { HttpCourseService} from './../course/http-course.service'

// Component represents the Home Page View
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls:  ['./home.component.css']
})

export class HomeComponent{

  courses: Course[];
  errorMessage: string;

  // Inject HttpCourseService via Constructor
  constructor(private _httpService: HttpCourseService){}

  // Lifecycle hook - method executing on the Component Initialization
  ngOnInit(): void {
    // Fetch the Recent Courses (last 20) with subscribing to the observalbe returned by _httpService
    this._httpService.getRecentCourses()
    .subscribe(courses => this.courses = courses,
      error => this.errorMessage = <any> error);
    }

}
