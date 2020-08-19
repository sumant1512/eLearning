import { FormGroup, FormControl, Validators } from "@angular/forms";

export function otpVerificationForm() {
  return new FormGroup({
    email: new FormControl(),
    otp: new FormControl("", [
      Validators.required,
      Validators.pattern("^((\\+91-?)|0)?[0-9]{6}$"),
    ]),
  });
}
