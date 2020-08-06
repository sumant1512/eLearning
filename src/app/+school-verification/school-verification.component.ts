import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-school-verification",
  templateUrl: "./school-verification.component.html",
  styleUrls: ["./school-verification.component.css"],
})
export class SchoolVerificationComponent implements OnInit {
  otpForm: FormGroup;
  submitted = false;

  constructor(private router: Router, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.otpForm = this.formBuilder.group({
      email: [
        "",
        [
          Validators.required,
          Validators.pattern(
            "^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$"
          ),
        ],
      ],
      otp: [
        "",
        [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{6}$")],
      ],
    });
  }
  get f() {
    return this.otpForm.controls;
  }
  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  onSubmit() {
    // stop here if form is invalid
    if (this.otpForm.invalid) {
      return;
    }

    alert("SUCCESS!! :-)\n\n" + JSON.stringify(this.otpForm.value));
  }

  sendOtp() {
    // const otpDetails = this.otpForm.value;
    // var verify_detail = {
    //   email: otpDetails.email,
    //   otp: otpDetails.otp,
    // };
    // this.RegistrationService.verifyOtp(verify_detail).subscribe((response) => {
    //   console.log(otpDetails.email);
    //   console.log(otpDetails.otp);
    //   if (response["status"]) {
    //     this.router.navigateByUrl("/home");
    //     alert("School verified successfully.");
    //   } else {
    //     alert("Wrong Otp");
    //   }
    // });
  }
}
