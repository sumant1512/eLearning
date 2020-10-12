import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { CommonService } from "../store/common/common.service";
import { ForgetPasswordService } from "../store/services/forget-password.service";
import { VerificationService } from "../store/services/verification.service";

@Component({
  selector: "app-reset-password",
  templateUrl: "./reset-password.component.html",
  styleUrls: ["./reset-password.component.css"],
})
export class ResetPasswordComponent implements OnInit {
  displayOTPForm: boolean = false;
  displayPasswordForm: boolean = false;
  email: string;
  subsctiption: Subscription = new Subscription();
  constructor(
    private router: Router,
    private forgetPassword: ForgetPasswordService,
    private verificationService: VerificationService,
    private commonService: CommonService
  ) {}

  ngOnInit() {}

  sendOTP(email): void {
    this.email = email;
    this.forgetPassword.getOTP({ email }).subscribe((response) => {
      if (response["body"].status) {
        this.displayOTPForm = true;
      }
    });
  }

  verifyOTP(otp): void {
    this.verificationService
      .verifyOtp({ otp, email: this.email })
      .subscribe((response) => {
        if (response["body"].status) {
          this.displayPasswordForm = true;
        } else alert(response["body"].message);
      });
  }

  updatePassword(pass): void {
    let password = this.commonService.encrypt(pass);
    this.subsctiption.add(
      this.forgetPassword
        .updatePassword({ email: this.email, password })
        .subscribe((response) => {
          if (response["body"].status) {
            this.router.navigate(["home"]);
          } else alert(response["body"].message);
        })
    );
  }
}
