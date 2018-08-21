import { Component, OnInit } from '@angular/core';
import {AddService} from '../add.service'

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courseId:number;
  courseName:string;
  coursePrice:number;

  constructor(private caller:AddService) { }

  invokepost()
  {
    this.caller.postData(this.courseId,this.courseName,this.coursePrice).subscribe((data:any)=>{});
  }
  ngOnInit() {
    console.log("loaded");
  }

}
