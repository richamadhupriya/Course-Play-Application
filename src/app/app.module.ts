import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { ReactiveFormsModule, FormsModule, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AddCoursesComponent  } from './add-courses/add-courses.component';
import { CourseswithjsonComponent } from './courseswithjson/courseswithjson.component';

import {CoursesComponent} from './courses/courses.component';

@NgModule({
  declarations: [
    AppComponent,
    AddCoursesComponent,
    CourseswithjsonComponent,
   
    CoursesComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
   {
    path: 'addCourses',
    component : AddCoursesComponent 
    },
    {
      path: 'fetchCourses',
      component: CourseswithjsonComponent
    }
   ])
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
