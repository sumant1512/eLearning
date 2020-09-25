import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import * as CryptoJS from "crypto-js";
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
    const encryptedPassword = this.encryptCredentials(this.loginForm.value);
    const classDetail = this.loginForm.value;
    this.store.dispatch(new AuthActions.UserLogin(classDetail));
  }

  encryptCredentials(data: any) {
    return CryptoJS.AES.encrypt(
      data.email.trim(),
      data.password.trim()
    ).toString();
  }

  register() {
    this.router.navigateByUrl("/registration");
  }
}
