import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Course } from '../../models/course';
import { CourseService } from '../../service/course.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-table-courses',
  standalone: true,
  imports: [NgClass],
  templateUrl: './table-courses.component.html',
  styleUrl: './table-courses.component.css'
})
export class TableCoursesComponent {
  coursesSErvice = inject(CourseService)
  @Input() dataCourses: Course[] = [];
  @Output() deleteCourse = new EventEmitter();
  @Output() updateCourse = new EventEmitter();
  @Output() status = new EventEmitter();
  anable = true
btn: string|string[]|Set<string>|{ [klass: string]: any; }|null|undefined;

  removeCorses(id : number){
    this.deleteCourse.emit(id)
  }
  updateMethode(dataCourses: Course){
  this.updateCourse.emit(dataCourses)
  window.scrollTo(0, 0);
  }
  changeStatusCourse(course: Course) {
    this.status.emit({id: course.id, status: course.status})
  }
}
