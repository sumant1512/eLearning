import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from "@angular/forms";

export function schoolRegisterForm() {
  return new FormGroup({
    schoolName: new FormControl("", [Validators.required]),
    adminName: new FormControl("", [Validators.required]),
    schoolType: new FormControl("", [Validators.required]),
    adminAdhar: new FormControl("", [
      Validators.required,
      Validators.pattern("^[0-9]{12}$"),
    ]),
    schoolRegistrationNo: new FormControl("", Validators.required),
    email: new FormControl("", [
      Validators.required,
      Validators.pattern(
        "^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$"
      ),
    ]),
    adminContactNo: new FormControl("", [
      Validators.required,
      Validators.pattern("^((\\+91 -?)|0)?[0-9]{10}$"),
    ]),
    studentContactNo: new FormControl("", [
      Validators.required,
      Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$"),
    ]),
    password: new FormControl("", [
      Validators.required,
      Validators.pattern(
        "^(?=.?[A-Z])(?=.?[a-z])(?=.?[0-9])(?=.?[#?!@$%^&*-]).{8,}$"
      ),
    ]),
    confirmPassword: new FormControl("", [Validators.required]),
  });
}
