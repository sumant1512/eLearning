import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { ErrorNotificationService } from "src/app/store/services/error-notification.service";
import { SuccessMessageType } from "./types/success-notification.type";

@Component({
  selector: "app-success-notification",
  templateUrl: "./success-notification.component.html",
  styleUrls: ["./success-notification.component.css"],
})
export class SuccessNotificationComponent implements OnInit {
  @ViewChild("modalDisplay", { static: false }) modalDisplay: ElementRef;
  view: boolean = false;
  message: SuccessMessageType;

  constructor(private errorService: ErrorNotificationService) {}

  ngOnInit() {
    this.initializeSuccess();
  }

  private initializeSuccess() {
    this.errorService.getSuccess().subscribe((success) => {
      if (success) {
        this.view = true;
        this.message = success;
        document.getElementsByTagName("body")[0].classList.add("modal-open");
      }
    });
  }

  closeModal(): void {
    this.view = false;
    document.getElementsByTagName("body")[0].classList.remove("modal-open");
  }
}
