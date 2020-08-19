import { Component, OnInit } from '@angular/core';
import { AppState } from "src/app/store/app.state";
import { Store } from "@ngrx/store";
import { ProfileType } from "src/app/store/auth/types/profile.type";
import * as AuthActions from "../../store/auth/auth.actions";
import { FormGroup } from "@angular/forms";
import { schoolEditForm } from "./settings.utils";
import { AuthService } from 'src/app/store/auth/api/auth.service';



@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  adminProfile: any;
  schoolEditForm: FormGroup;
    constructor(private store: Store<AppState>,private authService:AuthService) {
      this.schoolEditForm = schoolEditForm();
   }

  ngOnInit() {
    this.getUserProfile();
  }
   get f() {
    return this.schoolEditForm.controls;
  }
  getUserProfile(): void {
    this.store.select("profile").subscribe((response) => {
      if (response.userDetails.user_id) {
        this.adminProfile = response['userDetails'];
        this.setValues();
      } else {
         const authToken = localStorage.getItem("AUTH_TOKEN");
        this.store.dispatch(new AuthActions.FetchProfile(authToken));
      }
    });
  }
   
  updateSchool() {
    const schoolDetails = this.schoolEditForm.value;
    this.authService
      .updateCurrentSchool(schoolDetails)
      .subscribe((response) => {
        if (response["status"]) {
          this.fetchUserProfile();
          alert('School details updated successfully');
        } else {
          alert('Updation failed');
        }
      });
    this.schoolEditForm.markAsPristine();
  }
  fetchUserProfile() {
    const authToken = localStorage.getItem("AUTH_TOKEN");
    this.store.dispatch(new AuthActions.FetchProfile(authToken));
    this.setValues();
  }
  setValues():void {
    this.schoolEditForm.patchValue({
      schoolName: this.adminProfile.school_name,
      adminName:this.adminProfile.admin_name,
      adminAdhar:this.adminProfile.aadhar_number,
      schoolRegistrationNo:this.adminProfile.school_registration_no,
      adminContactNo:this.adminProfile.admin_contact_no,
      schoolContactNo:this.adminProfile.school_contact_no,
      address:this.adminProfile.address,
    });
  }
}
