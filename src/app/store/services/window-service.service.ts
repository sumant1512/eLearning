import { Injectable, HostListener } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class WindowServiceService {
  isMobile: Observable<boolean>;
  isTablet: Observable<boolean>;

  constructor() {}

  @HostListener("window:resize", ["$event"])
  onResize(event) {
    if (event.target.innerWidth < 991) {
      this.isTablet = of(true);
      this.isMobile = of(false);
    } else if (event.target.innerWidth < 768) {
      this.isMobile = of(false);
      this.isTablet = of(true);
    }
  }
}
