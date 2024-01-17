import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  http = inject(HttpClient)
  apiUrl  = 'http://localhost:3000/courses'

  getMethode(){
    return this.http.get(this.apiUrl)
  }

  postMethode(data: any){
    this.http.post(this.apiUrl, data)
  }

}
