import { Component, inject, OnInit } from '@angular/core';
import { TableCoursesComponent } from '../../components/table-courses/table-courses.component';
import { GrideCoursesComponent } from '../../components/gride-courses/gride-courses.component';
import { Course } from '../../models/course';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';
import { CourseService } from '../../service/course.service';
import { Route } from 'react-router-dom';

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

  toggleForm: boolean = false;
  gridList : boolean = false;
  editeModel : boolean = false;
  courseForme : Course = {
    title: '',
    img: '',
    price: 0,
    description: '',
    status: true,
  }

  changeToggleForm(){
    this.toggleForm = !this.toggleForm;
  }

  typeAffichageList(arg : boolean){
    this.gridList = arg;
  }
  addMethode(){
    this.courseForme.id = uuidv4();
    this.courses = [this.courseForme , ...this.courses ]
    this.initForm();
  }

  updateForm(course: Course){
    this.editeModel == true
    this.courseForme = course
    this.toggleForm = true;
  }

  updatCorse() {
    this.initForm();
    this.editeModel = false
    this.toggleForm = false;
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
  initForm(){
    this.courseForme  = {
      title: '',
      img: '',
      price: 0,
      description: '',
      status: true,
    }
    this.toggleForm = !this.toggleForm;
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
        this.courses = this.courses.filter(course => course.id !== id)
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
        console.log(data);
      },
      error: (err) =>{
      },
      complete: () =>{}
    })
  }

  courses: Course[] = [
    {
      id: 1,
      title: 'Course 1',
      img: 'https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwb2JqZWN0c3xlbnwwfHwwfHx8MA%3D%3D',
      price: 234,
      description: 'Course description',
      status: true,
    },
    {
      id: 2,
      title: 'Course 2',
      img: 'https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwb2JqZWN0c3xlbnwwfHwwfHx8MA%3D%3D',
      price: 234,
      description: 'Course description',
      status: false,
    },
    {
      id: 3,
      title: 'Course 3',
      img: 'https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwb2JqZWN0c3xlbnwwfHwwfHx8MA%3D%3D',
      price: 234,
      description: 'Course description',
      status: true,
    },
    {
      id: 4,
      title: 'Course 4',
      img: 'https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwb2JqZWN0c3xlbnwwfHwwfHx8MA%3D%3D',
      price: 234,
      description: 'Course description',
      status: true,
    },
    {
      id: 5,
      title: 'Course 5',
      img: 'https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwb2JqZWN0c3xlbnwwfHwwfHx8MA%3D%3D',
      price: 234,
      description: 'Course description',
      status: false,
    },
    {
      id: 6,
      title: 'Course 6',
      img: 'https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwb2JqZWN0c3xlbnwwfHwwfHx8MA%3D%3D',
      price: 234,
      description: 'Course description',
      status: true,
    },
  ];


}
