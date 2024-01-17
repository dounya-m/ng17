import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from '../models/course';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  http = inject(HttpClient)
  apiUrl  = 'http://localhost:3000/courses'

  getMethode(): Observable<Course[]>{
    return this.http.get<Course[]>(this.apiUrl)
  }

  postMethode(data: any){
    this.http.post(this.apiUrl, data)
  }
  UpdateMethode(id: any, data: any){
    this.http.post(this.apiUrl+'/'+id, data)
  }

}
