import { FormGroup, FormControl, Validators } from "@angular/forms";

export function addClassForm() {
  return new FormGroup({
    className: new FormControl("", [Validators.required]),
  });
}
