import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { loginForm } from "./login-form.utils";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-login-form",
  templateUrl: "./login-form.component.html",
  styleUrls: ["./login-form.component.css"],
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  loader: boolean;

  constructor(private authService: AuthService, private router: Router) {
    this.loginForm = loginForm();
  }

  ngOnInit(): void {}
  get f() {
    return this.loginForm.controls;
  }

  login() {
    this.loader = true;
    const loginDetails = this.loginForm.value;
    this.authService.login(loginDetails);
    setTimeout(function () {
      this.loader = false;
    }, 300);
  }
  onLoad() {
    let timerInterval;
    // Swal.fire({
    //   title: 'Your profile is loading',
    //   html: 'It will take few seconds.',
    //   timer: 5000,
    //   timerProgressBar: true,
    //   onBeforeOpen: () => {
    //     Swal.showLoading()
    //     timerInterval = setInterval(() => {
    //       const content = Swal.getContent();
    //     }, 100);
    //   },
    //   onClose: () => {
    //     clearInterval(timerInterval)
    //   }
    // }).then((result) => {
    //   if (result.dismiss === Swal.DismissReason.timer) {
    //     console.log('I was closed by the timer')
    //   }
    // })
  }

  register() {
    this.router.navigateByUrl("/registration");
    window.scrollTo(0, 0);
  }
}
