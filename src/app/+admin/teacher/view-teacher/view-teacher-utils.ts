import { FormGroup, FormControl, Validators } from "@angular/forms";

export function tagSubjectForm() {
  return new FormGroup({
    classId: new FormControl("", [Validators.required]),
    teacherId: new FormControl("", [Validators.required]),
  });
}
