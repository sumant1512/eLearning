import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { teacherRegistrationForm } from '../../teacher/add-teacher/add-teacher.utils';
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store/app.state";
@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.css']
})
export class AddTeacherComponent implements OnInit {
  teacherRegistrationForm: FormGroup;
  constructor(private store: Store<AppState>) { 
    this.teacherRegistrationForm = teacherRegistrationForm();
  }

  ngOnInit() {
  }
  get f() {
    return this.teacherRegistrationForm.controls;
  }
  registerTeacher():void{
console.log(this.teacherRegistrationForm.value)
  }

}
