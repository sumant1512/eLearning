import { FormGroup, FormControl } from "@angular/forms";

export function schoolImageForm() {
  return new FormGroup({
    adminImage: new FormControl(),
    schoolImage: new FormControl(),
  });
}
