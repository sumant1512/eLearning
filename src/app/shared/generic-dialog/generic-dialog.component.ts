import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { HttpErrorInterceptor } from "src/app/http-error.interceptor";

@Component({
  selector: "app-generic-dialog",
  templateUrl: "./generic-dialog.component.html",
  styleUrls: ["./generic-dialog.component.css"],
})
export class GenericDialogComponent implements OnInit {
  @ViewChild("modalDisplay", { static: false }) modalDisplay: ElementRef;
  view: boolean;

  constructor() {}

  ngOnInit() {
    this.openDialog();
  }

  openDialog() {
    document.getElementsByTagName("body")[0].classList.add("modal-open");
  }
}
