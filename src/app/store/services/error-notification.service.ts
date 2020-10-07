import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { ErrorType } from "src/app/shared/error-notification-dialog/types/error-notification.type";

@Injectable({
  providedIn: "root",
})
export class ErrorNotificationService {
  private errors = new Subject<ErrorType>();
  private success = new Subject<string>();

  constructor() {}

  public addErrors = (errors: ErrorType): void => this.errors.next(errors);

  public getErrors = () => this.errors.asObservable();

  public addSuccess = (success: string): void => this.success.next(success);

  public getSuccess = () => this.success.asObservable();
}
