import { FormGroup, FormControl, Validators } from "@angular/forms";

export function addForm() {
  return new FormGroup({
    itemName: new FormControl("", [Validators.required]),
  });
}

export function editForm() {
  return new FormGroup({
    newitemName: new FormControl("", [Validators.required]),
  });
}

export function assignSubjectForm() {
  return new FormGroup({
    classId: new FormControl("", [Validators.required]),
  });
}
