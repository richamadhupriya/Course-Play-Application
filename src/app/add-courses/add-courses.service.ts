import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Course} from './course';
import {courses} from "./mock-courses"

@Injectable({
  providedIn: 'root'
})
export class CourseService {
   
  constructor() { }

  displayCourses() {
    return of<Course[]>(courses);
  }

  addNewCourse(course: Course) {
    courses.push(course);
  }

  fetchDuration(name: string) {
    let searchResult = courses.find((course: Course) => course.courseName == name);
    console.log(searchResult)
    return of<Course>(searchResult);
  }
}
