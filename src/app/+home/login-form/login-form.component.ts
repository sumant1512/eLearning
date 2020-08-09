import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { loginForm } from "./login-form.utils";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store/app.state";
import * as AuthActions from ".././../store/auth/auth.actions";

@Component({
  selector: "app-login-form",
  templateUrl: "./login-form.component.html",
  styleUrls: ["./login-form.component.css"],
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  loader: boolean;

  constructor(private store: Store<AppState>, private router: Router) {
    this.loginForm = loginForm();
  }

  ngOnInit(): void {}
  get f() {
    return this.loginForm.controls;
  }

  login() {
    this.loader = true;
    const classDetail = this.loginForm.value;
    this.store.dispatch(new AuthActions.UserLogin(classDetail));
  }

  register() {
    this.router.navigateByUrl("/registration");
  }
}
