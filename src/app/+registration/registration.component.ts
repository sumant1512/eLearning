import { Component, OnInit } from "@angular/core";
//import { RegistrationService } from '../Services/registration.service';
import {
  FormGroup,
  Validators,
  FormControl,
  FormBuilder,
  AbstractControl,
} from "@angular/forms";
import { Router } from "@angular/router";
import { schoolRegisterForm } from "./registration.utils";
import { RegistrationService } from "../store/services/registration.service";
//import Swal from 'sweetalert2';

@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.css"],
})
export class RegistrationComponent implements OnInit {
  schoolRegisterForm: FormGroup;
  enteredOtp: number;
  error = false;
  validDetails = false;
  errorMessage: string;

  constructor(
    private router: Router,
    private registationService: RegistrationService
  ) {
    (this.schoolRegisterForm = schoolRegisterForm()),
      {
        validator: this.MustMatch("password", "confirmPassword"),
      };
  }

  ngOnInit() {}

  get f() {
    return this.schoolRegisterForm.controls;
  }

  MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        // return if another validator has already found an error on the matchingControl
        return;
      }

      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }

  registerSchool() {
    const schoolRegistrationDetails = this.schoolRegisterForm.value;
    this.registationService
      .schoolRegistration(schoolRegistrationDetails)
      .subscribe((response) => {
        console.log(response);
        if (response["status"]) {
          this.router.navigate(["verification"]);
        } else {
          this.error = true;
          this.errorMessage = response["message"];
          alert(this.errorMessage);
          // Swal.fire("Error!", response["message"], "error");
        }
      });
  }

  navigateToVerification() {
    this.router.navigate(["verification"]);
  }

  // sendOtp() {
  //   const schoolRegistrationDetails = this.schoolRegisterForm.value;
  //   var verify_detail = {
  //     email: schoolRegistrationDetails.email,
  //     otp: this.enteredOtp,
  //   };

  //   this.RegistrationService.verifyOtp(verify_detail).subscribe((response) => {
  //     if (response['status']) {
  //       const url = this.router.serializeUrl(
  //         this.router.createUrlTree(['/home'])
  //       );
  //       window.open(url, '_parent');
  //       Swal.fire('Success!', 'School verified successfully.', 'success');
  //     } else {
  //       Swal.fire('Sorry!', response['status'], 'error');
  //     }
  //   });
  // }
}
