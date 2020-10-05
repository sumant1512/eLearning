import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { VerificationService } from "../store/services/verification.service";

@Component({
  selector: "app-school-verification",
  templateUrl: "./school-verification.component.html",
  styleUrls: ["./school-verification.component.css"],
})
export class SchoolVerificationComponent implements OnInit {
  email: string;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private verificationService: VerificationService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.email = params["email"];
      if (!this.email) this.router.navigate(["registration"]);
    });
  }

  verifyOtp(otp): void {
    const verificationDetails = { email: this.email, otp };
    this.verificationService
      .verifyOtp(verificationDetails)
      .subscribe((response) => {
        if (response["body"].status) {
          alert(response["body"].message);
          this.router.navigateByUrl("/home");
        } else {
          alert(response["body"].message);
        }
      });
  }
}
