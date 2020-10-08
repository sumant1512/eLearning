import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { ErrorNotificationService } from "src/app/store/services/error-notification.service";
import { ErrorType } from "./types/error-notification.type";
import * as ContentNotFoundActions from "../../store/content-not-found/content-not-found.actions";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store/app.state";

@Component({
  selector: "app-error-notification-dialog",
  templateUrl: "./error-notification-dialog.component.html",
  styleUrls: ["./error-notification-dialog.component.css"],
})
export class ErrorNotificationDialogComponent implements OnInit {
  @ViewChild("modalDisplay", { static: false }) modalDisplay: ElementRef;
  view: boolean = false;
  error: ErrorType;

  constructor(
    private errorService: ErrorNotificationService,
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    this.initializeErrors();
  }

  private initializeErrors() {
    this.errorService.getErrors().subscribe((errors) => {
      if (errors) {
        if (errors.code === 404) {
          // this.store.dispatch(
          //   new ContentNotFoundActions.SetContentNotFoundFlag(true)
          // );
        } else {
          this.view = true;
          this.error = errors;
          document.getElementsByTagName("body")[0].classList.add("modal-open");
        }
      }
    });
  }

  closeModal(): void {
    this.view = false;
    document.getElementsByTagName("body")[0].classList.remove("modal-open");
  }
}
