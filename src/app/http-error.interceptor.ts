import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
  HttpResponse,
} from "@angular/common/http";
import { Store } from "@ngrx/store";
import { Observable, throwError } from "rxjs";
import { retry, catchError, tap } from "rxjs/operators";
import { ErrorType } from "./shared/error-notification-dialog/types/error-notification.type";
import { AppState } from "./store/app.state";
import { ErrorNotificationService } from "./store/services/error-notification.service";
import * as ContentNotFoundActions from "../app/store/content-not-found/content-not-found.actions";
import { SuccessMessageType } from "./shared/success-notification/types/success-notification.type";

export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(
    private errorService: ErrorNotificationService,
    private store: Store<AppState>
  ) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      tap((data) => {
        if (data instanceof HttpResponse) {
          this.store.dispatch(
            new ContentNotFoundActions.SetContentFoundFlag(true)
          );
          if (data.body.message) {
            let successMessage: SuccessMessageType;
            successMessage = {
              status: "Success",
              message: data.body.message,
            };
            this.errorService.addSuccess(successMessage);
            return throwError(successMessage);
          }
        }
      }),
      retry(1),
      catchError((error: HttpErrorResponse) => {
        let errorMessage: ErrorType;
        if (error.error instanceof ErrorEvent) {
          // client-side error
          errorMessage.message = `Error: ${error.error.message}`;
        } else {
          // server-side error
          if (error.status === 404) {
            this.store.dispatch(
              new ContentNotFoundActions.SetContentFoundFlag(false)
            );
          } else {
            errorMessage = {
              code: error.status,
              message: error.error.message,
            };
            this.errorService.addErrors(errorMessage);
            return throwError(errorMessage);
          }
        }
      })
    );
  }
}
