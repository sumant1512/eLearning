import {FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";


  export function schoolRegisterForm() {

    return new FormGroup(
        {
            schoolName: new FormControl("", [Validators.required]),
            adminName: new FormControl("", [Validators.required]),
      
          adminAdhar: new FormControl(
            "",
            [Validators.required, Validators.pattern("^[0-9]{12}$")],
          ),
          schoolRegistrationNo: new FormControl("", Validators.required),
          email: new FormControl(
            "",
            [
              Validators.required,
              Validators.pattern(
                "^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$"
              ),
            ],
          ),
          adminContactNo: new FormControl(
            "",
            [
              Validators.required,
              Validators.pattern("^[6-9]{1}][0-9]{9}$"),
            ],
          ),
          studentContactNo: new FormControl(
            "",
            [
              Validators.required,
              Validators.pattern("^[6-9]{1}][0-9]{9}$"),
            ],
          ),
          password: new FormControl(
            "",
            [
              Validators.required,
              Validators.pattern(
                "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"
              )
            ],
          ),
          confirmPassword: new FormControl("", Validators.required,  ),
        },
        {
        // validator: MustMatch('password', 'confirmPassword')
        });
}


const MustMatch = function (controlName: string, matchingControlName: string) {
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
  }
}