import { Injectable } from '@angular/core';
import { Course } from './course';

import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class HttpCourseService {

  private _baseUrl = 'http://localhost:8080/services/courses';

    // Injection of Http
  constructor( private _http: Http) {
  }

  // Fetch all Courses
  getAllCourses(): Observable<Course[]>{
    // Http GET Request
    return this._http.get(this._baseUrl)
    // rxjs map method, for mapping response to array of Courses
    .map((response:Response) => <Course[]>response.json())
    .do(data => console.log('All: ' +  JSON.stringify(data)))
    // catch and handle errors with specified method
    .catch(this.handleError);
  }
  // Fetch the last 20 courses
  getRecentCourses(): Observable<Course[]>{
    // Use query params for specify the last 20 courses (desc order)
    return this._http.get(`$(this._baseUrl)/pagination?start=0&pagesize=20`)
    .map((response:Response) => <Course[]>response.json())
    .do(data => console.log('All: ' +  JSON.stringify(data)))
    .catch(this.handleError);
  }

  // Fetch a particular course
  getCourseById(id: number): Observable<Course>{
    // Accessing the path: http://localhost:8080/services/courses/id
    return this._http.get(`${this._baseUrl}/${id}`)
    .map((response:Response) => <Course>response.json())
    .do(data => console.log('All: ' +  JSON.stringify(data)))
    .catch(this.handleError);
  }

  // Add a course
  addCourse(course: Course): Observable<Course>{
    // Specify Request Headers and Request Options
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    // Http POST request
    return this._http.post(this._baseUrl, course, options)
    .map((response:Response) => <Course>response.json())
    .catch(this.handleError);
  }

  // Update (already existed) course
  updateCourse(course: Course): Observable<Course>{
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    // Http PUT request
    return this._http.put(`${this._baseUrl}/${course.id}`, course, options)
    .map((response:Response) => <Course>response.json())
    .catch(this.handleError);
  }

  // Delete (already existed) course
  deleteCourse(id: number): Observable<Course>{
    // Accessing the path: http://localhost:8080/services/courses/id with Http DELETE Request
    return this._http.delete(`${this._baseUrl}/${id}`)
    .map((response:Response) => response.json())
    .catch(this.handleError);
  }

  //Method for error handling after http request
  private handleError(error: Response) {
    console.error(error);
    // Throw Error
    return Observable.throw(error.json().error || 'Server error');
  }

}
