import { FormGroup, FormControl, Validators } from "@angular/forms";

export function addVideoForm() {
  return new FormGroup({
    video: new FormControl("", [Validators.required]),
  });
}
