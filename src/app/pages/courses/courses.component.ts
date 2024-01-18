import { Component, inject, OnInit } from '@angular/core';
import { TableCoursesComponent } from '../../components/table-courses/table-courses.component';
import { GrideCoursesComponent } from '../../components/gride-courses/gride-courses.component';
import { Course } from '../../models/course';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';
import { CourseService } from '../../service/course.service';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [TableCoursesComponent, GrideCoursesComponent, FormsModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent  {
  ngOnInit(){
    this.loadCorses();
  }

  courseServices = inject(CourseService)
  courses: Course[] = [];
  toggleForm: boolean = false;
  gridList : boolean = false;
  editeModel : boolean = false;
  ebavleDesable : boolean = false;
  getStatus(value: boolean){
    this.ebavleDesable = value
    console.log(this.ebavleDesable);

  }
  courseForme : Course = {
    title: '',
    img: '',
    price: 0,
    description: '',
    status: '',
  }


  changeToggleForm(){
    this.toggleForm = !this.toggleForm;
  }

  typeAffichageList(arg : boolean){
    this.gridList = arg;
  }
  addMethode(){
    this.courseForme.id = uuidv4();
    this.courseForme.status = this.ebavleDesable
    // this.courses = [this.courseForme , ...this.courses ]
    this.courseServices.postMethode(this.courseForme).subscribe(
      (data)=>{
        this.courses = data
        window.location.reload()
        console.log(data);
      }
    )
    this.initForm();
  }
  initForm(){
    this.courseForme  = {
      title: '',
      img: '',
      price: 0,
      description: '',
      status: true,
    }

  }

  updateForm(course: Course) {
    this.toggleForm = !this.toggleForm;
    this.editeModel = true;
    this.courseForme = course;
  }



  updatCorse() {
    const singleCourse  = this.courseForme
    singleCourse.status = this.ebavleDesable
    this.courseServices.updateMethode(singleCourse.id, singleCourse).subscribe({
      next: (response: any) => {
        this.initForm();
        this.toggleForm = false
      },
      error: (error: any) => {
        console.error('Update error:', error);
      }
    });
  }

enabledediting(data: {id: number | string, status: boolean}) {
    this.courses = this.courses.map(course => {
      if(course.id === data.id) {
        return {
          ...course,
          status: !data.status
        }
      }
      return course
    })
  }


  deleteCoursParent(id: any){
    console.log('deleteCoursParent', id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.courseServices.deleteMethode(id).subscribe({
          next: () => {
            this.courses = this.courses.filter(course => course.id !== id)
            console.log('data are deleted');
          }
        })

        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        }).catch((error)=>{
          console.log('this id does not exist');

        });
      }
    });
  }


  loadCorses(){
    this.courseServices.getMethode().subscribe({
      next: (data) =>{
        this.courses = data
        console.log('hellooo',data);
      },
      error: (err) =>{
      },
      complete: () =>{}
    })
  }




}
