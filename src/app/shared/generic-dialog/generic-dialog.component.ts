import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { ErrorNotificationService } from "src/app/store/services/error-notification.service";

@Component({
  selector: "app-generic-dialog",
  templateUrl: "./generic-dialog.component.html",
  styleUrls: ["./generic-dialog.component.css"],
})
export class GenericDialogComponent implements OnInit {
  @ViewChild("modalDisplay", { static: false }) modalDisplay: ElementRef;
  view: boolean = false;
  message: string = "";

  constructor(private errorService: ErrorNotificationService) {
    this.initializeErrors();
  }

  ngOnInit() {
    this.openDialog();
  }

  openDialog() {
  }

  private initializeErrors() {
    this.errorService.getErrors().subscribe((errors) => {
      if (errors) {
        this.view = true;
        this.message = errors;
        document.getElementsByTagName("body")[0].classList.add("modal-open");
      }
    });
  }

  closeModal(): void {
    this.view = false;
    document.getElementsByTagName("body")[0].classList.remove("modal-open");
  }
}
