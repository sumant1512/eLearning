import { Component, OnInit} from '@angular/core';
//import { RegistrationService } from '../Services/registration.service';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { schoolRegisterForm } from './registration.utils';
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

  constructor( private router: Router, private formBuilder: FormBuilder
      // private RegistrationService: RegistrationService 
       ) 
      {
        this.schoolRegisterForm = schoolRegisterForm();
  }

  ngOnInit() {}

  get f() {
    return this.schoolRegisterForm.controls;
  }

  // registerSchool() {
  //   const schoolRegistrationDetails = this.schoolRegisterForm.value;
  //   this.RegistrationService.schoolRegistration(
  //     schoolRegistrationDetails
  //   ).subscribe((response) => {
  //     console.log(response);
  //     if (response['status']) {
  //       // this.validDetails = true;
  //     } else {
  //       this.error = true;
  //       this.errorMessage = response['messageEmail'];
  //       Swal.fire('Error!' , response['message'], 'error');
  //     }
  //   });
  // }

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
