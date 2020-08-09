import { FormGroup, FormControl, Validators } from "@angular/forms";

export function addClassForm() {
  return new FormGroup({
    class_name: new FormControl("", [Validators.required]),
  });
}
