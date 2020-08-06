import { FormGroup, FormControl } from "@angular/forms";

export function schoolImageForm() {
  return new FormGroup({
    studentImage: new FormControl(),
  });
}
