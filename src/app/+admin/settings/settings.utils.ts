import { FormGroup, FormControl, Validators } from "@angular/forms";

export function schoolEditForm() {
  return new FormGroup({
    schoolName:new FormControl("",[ Validators.required]),
    adminName: new FormControl("",[ Validators.required]),
    adminAdhar:new FormControl("",[ Validators.required, Validators.pattern("^[0-9]{12}$")]),
    schoolRegistrationNo:new FormControl("", [Validators.required]),
    
        adminContactNo:new FormControl(
          "",
          [
            Validators.required,
            Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$"),
          ],
        ),
        schoolContactNo:new FormControl(
          "",
          [
            Validators.required,
            Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$"),
          ],
        ),
        address : new FormControl("", [Validators.required]),
  });
}


