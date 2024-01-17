import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../../models/course';

@Component({
  selector: 'app-table-courses',
  standalone: true,
  imports: [],
  templateUrl: './table-courses.component.html',
  styleUrl: './table-courses.component.css'
})
export class TableCoursesComponent {
  @Input() dataCourses: Course[] = [];
  @Output() deleteCourse = new EventEmitter();

  removeCorses(id : number){
    console.log('deleteCourseChilde', id);
    this.deleteCourse.emit(id)
  }
}
