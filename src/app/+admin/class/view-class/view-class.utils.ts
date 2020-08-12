import { FormGroup, FormControl, Validators } from "@angular/forms";

export function editClassForm() {
  return new FormGroup({
    class_name: new FormControl("", [Validators.required]),
  });
}