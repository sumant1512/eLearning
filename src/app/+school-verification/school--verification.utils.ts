import { FormGroup, FormControl, Validators } from "@angular/forms";

export function otpVerificationForm() {
  return new FormGroup({
    email: new FormControl("", [
      Validators.required,
      Validators.pattern(
        "^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$"
      ),
    ]),
    otp: new FormControl("", [
      Validators.required,
      Validators.pattern("^((\\+91-?)|0)?[0-9]{6}$"),
    ]),
  });
}
