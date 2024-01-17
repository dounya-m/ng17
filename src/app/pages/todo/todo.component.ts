import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {

  title = "";
  todos = ['learn angular', 'javascript', 'typescript for oop']

  addTodo() {
    // this.todos.unshift(this.title)

    this.todos = [this.title, ...this.todos]
    this.title = ""
  }
  deleteElement(index: number){
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        this.todos.splice(index, 1)
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
          timer: 1500,
          timerProgressBar: true,
        });
      }
    })
  }

  updateElement(element : string){
    this.title = element
  }
}
