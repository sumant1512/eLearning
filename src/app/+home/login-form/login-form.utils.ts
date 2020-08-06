import { FormGroup, FormControl, Validators } from "@angular/forms";

export function loginForm() {
  return new FormGroup({
    email: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required]),
  });
}
