import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import {AddService} from '../add.service';

@Component({
  selector: 'app-courseswithjson',
  templateUrl: './courseswithjson.component.html',
  styleUrls: ['./courseswithjson.component.css']
})
export class CourseswithjsonComponent implements OnInit {
  constructor(private httpService:HttpClient, private caller:AddService){}
  courseArray:any;
  sel:any;
  Id:number;
  Name:string;
  Price:number;
  updateId:number;
  updateName:string;
  updatePrice:number;
  i:number;
  indexno:number;
  delName:any;

  courseId:number;
  courseName:string;
  coursePrice:number;

  apply():any
  {
    if(this.sel=="Id")
    {
      this.courseArray.sort(function(x,y){
        if(x.courseId < y.courseId)
          return -1;
        if(x.courseId > y.courseId)
          return 1;
        return 0;
      });
    }
    else if(this.sel=="Name")
    {
      this.courseArray.sort(function(x,y){
        if(x.courseName.toLowerCase() < y.courseName.toLowerCase())
          return -1;
        if(x.courseName.toLowerCase() > y.courseName.toLowerCase())
          return 1;
        return 0;
      });
    }
    else if(this.sel=="Price")
    {
      this.courseArray.sort(function(x,y){
        if(x.coursePrice < y.coursePrice)
          return -1;
        if(x.coursePrice > y.coursePrice)
          return 1;
        return 0;
      });
    }
  }

  delete(course,indexno)
  {
   this.indexno=indexno;
     this.updateId=course.courseId;
     this.updateName=course.courseName;
     this.updatePrice=course.coursePrice;
  }
  confdelete(){
    this.delName=this.courseArray[this.indexno].courseId;
    this.caller.deleteData(this.indexno).subscribe((data:any)=>{});
  }
  update(course,i)
  {
    this.i=i;
    this.updateId=course.courseId;
    this.updateName=course.courseName;
    this.updatePrice=course.coursePrice;
  }

  updatedetails()
  {
    this.courseArray[this.i]={
      courseId:this.updateId,
      courseName:this.updateName,
      coursePrice:this.updatePrice,
    }
    this.caller.updateData(this.updateId,this.updateName,this.updatePrice,this.i).subscribe((data:any)=>{});
}

invokepost()
{
  this.caller.postData(this.courseId,this.courseName,this.coursePrice).subscribe((data:any)=>{});
}

  ngOnInit(){
    this.httpService.get('../assets/courses.json').subscribe(data=>{this.courseArray=data as string[];},);
  }
}
