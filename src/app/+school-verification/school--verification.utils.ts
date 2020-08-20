import { FormGroup, FormControl, Validators } from "@angular/forms";

export function otpVerificationForm() {
  return new FormGroup({
    
    otp: new FormControl("", [
      Validators.required,
      Validators.pattern("^((\\+91-?)|0)?[0-9]{6}$"),
    ]),
  });
}
