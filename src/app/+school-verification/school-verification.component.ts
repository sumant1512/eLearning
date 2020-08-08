import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { VerificationService } from "../services/verification.service";
import { otpVerificationForm } from "./school--verification.utils";

@Component({
  selector: "app-school-verification",
  templateUrl: "./school-verification.component.html",
  styleUrls: ["./school-verification.component.css"],
})
export class SchoolVerificationComponent implements OnInit {
  otpForm: FormGroup;
  submitted = false;

  constructor(
    private router: Router,
    private verificationService: VerificationService
  ) {
    this.otpForm = otpVerificationForm();
  }

  ngOnInit() {}
  get f() {
    return this.otpForm.controls;
  }

  verifiyOtp() {
    alert("hi");
    const verificationDetails = this.otpForm.value;
    this.verificationService
      .verifyOtp(verificationDetails)
      .subscribe((response) => {
        if (response["status"]) {
          this.router.navigateByUrl("/home");
          alert("School verified successfully.");
        } else {
          alert("Wrong Otp");
        }
      });
  }
}
