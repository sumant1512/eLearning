import { Component, OnInit } from "@angular/core";
import { FormGroup, AbstractControl } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { otpVerificationForm } from "./school--verification.utils";
import { VerificationService } from "../store/services/verification.service";

@Component({
  selector: "app-school-verification",
  templateUrl: "./school-verification.component.html",
  styleUrls: ["./school-verification.component.css"],
})
export class SchoolVerificationComponent implements OnInit {
  otpForm: FormGroup;
  submitted = false;
  email;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private verificationService: VerificationService
  ) {
    this.otpForm = otpVerificationForm();
  }

  ngOnInit(): void {
    this.email = this.route.snapshot.paramMap.get("email");
  }
  get f() {
    return this.otpForm.controls;
  }
  verifiyOtp(): void {
    const verificationDetails = this.otpForm.value;
    this.verificationService
      .verifyOtp(verificationDetails)
      .subscribe((response) => {
        if (response["status"]) {
          this.router.navigateByUrl("/home");
          alert(response["message"]);
        } else {
          alert(response["message"]);
        }
      });
  }
}
