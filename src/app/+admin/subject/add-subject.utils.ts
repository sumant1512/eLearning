import { FormGroup, FormControl, Validators } from "@angular/forms";

export function addSubjectForm() {
  return new FormGroup({
    className: new FormControl("", [Validators.required]),
  });
}
