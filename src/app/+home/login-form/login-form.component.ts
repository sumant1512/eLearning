import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import * as CryptoJS from "crypto-js";
import { loginForm } from "./login-form.utils";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store/app.state";
import * as AuthActions from ".././../store/auth/auth.actions";
import { CommonService } from "src/app/store/common/common.service";

@Component({
  selector: "app-login-form",
  templateUrl: "./login-form.component.html",
  styleUrls: ["./login-form.component.css"],
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  loader: boolean;

  constructor(
    private store: Store<AppState>,
    private router: Router,
    private commonService: CommonService
  ) {
    this.loginForm = loginForm();
  }

  ngOnInit(): void {}
  get f() {
    return this.loginForm.controls;
  }

  login() {
    this.loader = true;
    let password = this.commonService.encrypt(this.loginForm.value.password);
    const classDetail = {
      email: this.loginForm.value.email,
      password: password,
    };
    this.store.dispatch(new AuthActions.UserLogin(classDetail));
  }
  register() {
    this.router.navigateByUrl("/registration");
  }
}
