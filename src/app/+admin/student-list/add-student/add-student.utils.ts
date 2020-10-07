import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from "@angular/forms";

export function studentRegistrationForm() {
  return new FormGroup({
    firstName: new FormControl("", [Validators.required]),
    lastName: new FormControl("", [Validators.required]),
    fatherName: new FormControl("", [Validators.required]),
    class: new FormControl("", [Validators.required]),
    dob: new FormControl("", [Validators.required]),
    addressLineOne: new FormControl("", [Validators.required]),
    addressLineTwo: new FormControl("", [Validators.required]),
    email: new FormControl("", [
      Validators.required,
      Validators.pattern(
        "^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$"
      ),
    ]),
    mobile: new FormControl("", [
      Validators.required,
      Validators.pattern("^((\\+91 -?)|0)?[0-9]{10}$"),
    ]),
    gender: new FormControl("", [Validators.required]),
    city: new FormControl("", [Validators.required]),
    state: new FormControl("", [Validators.required]),
    scholarNumber: new FormControl("", [
      Validators.required,
      Validators.pattern("^[0-9]{12}$"),
    ]),
    postalCode: new FormControl("", [
      Validators.required,
      Validators.pattern("^[0-9]{6,6}$"),
    ]),
  });
}
