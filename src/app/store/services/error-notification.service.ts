import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { ErrorType } from "src/app/shared/error-notification-dialog/types/error-notification.type";
import { SuccessMessageType } from "src/app/shared/success-notification/types/success-notification.type";

@Injectable({
  providedIn: "root",
})
export class ErrorNotificationService {
  private errors = new Subject<ErrorType>();
  private success = new Subject<SuccessMessageType>();

  constructor() {}

  public addErrors = (errors: ErrorType): void => this.errors.next(errors);

  public getErrors = () => this.errors.asObservable();

  public addSuccess = (success: SuccessMessageType): void =>
    this.success.next(success);

  public getSuccess = () => this.success.asObservable();
}
