import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable,of} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AddService {

  constructor(private http:HttpClient) { }
postData(courseId:number,courseName:string,coursePrice:number):Observable<any>{
  
  return this.http.post('http://localhost:8000/rest/api/post',{
    name:courseName,
    id:courseId,
    price:coursePrice
  })
}

updateData(courseId:number,courseName:string,coursePrice:number,index:number):Observable<any>{
  
  return this.http.post('http://localhost:8000/rest/api/update',{
    name:courseName,
    id:courseId,
    price:coursePrice,
    index:index,
  })
}

deleteData(index:any):Observable<any>{
  
  return this.http.post('http://localhost:8000/rest/api/delete',{
    index:index,
  })
}


}
