import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
  selector: "app-video",
  templateUrl: "./video.component.html",
  styleUrls: ["./video.component.css"],
})
export class VideoComponent implements OnInit, OnDestroy {
  view: any;
  subscription: Subscription = new Subscription();

  constructor(private router: Router, private Activatedroute: ActivatedRoute) {}

  ngOnInit() {
    this.subscription.add(
      this.Activatedroute.queryParams.subscribe((params) => {
        const temp = params["view"];
        if (temp === "true") {
          this.view = true;
        } else if (temp === "false") {
          this.view = false;
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
