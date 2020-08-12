import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms";
import { addClassForm } from "./add-class-mobile.utils";
@Component({
  selector: 'app-add-class-mobile',
  templateUrl: './add-class-mobile.component.html',
  styleUrls: ['./add-class-mobile.component.css']
})
export class AddClassMobileComponent implements OnInit {
  addClassForm: FormGroup;
  loader: boolean;
  constructor() {
    this.addClassForm = addClassForm();
  }

  ngOnInit(): void {}

  addClass() {}

  login() {
    this.loader = true;
  }
  

}
