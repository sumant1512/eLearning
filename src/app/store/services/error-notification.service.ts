import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ErrorNotificationService {
  private errors = new Subject<string>();
  private success = new Subject<string>();

  constructor() {}

  public addErrors = (errors: string): void => this.errors.next(errors);

  public getErrors = () => this.errors.asObservable();

  public addSuccess = (success: string): void => this.success.next(success);

  public getSuccess = () => this.success.asObservable();
}
