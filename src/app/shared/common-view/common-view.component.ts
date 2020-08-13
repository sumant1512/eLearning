import { Component, OnInit, Input } from "@angular/core";
import { ClassListType } from "src/app/store/class/types/class.type";

@Component({
  selector: "app-common-view",
  templateUrl: "./common-view.component.html",
  styleUrls: ["./common-view.component.css"],
})
export class CommonViewComponent implements OnInit {
  @Input() viewList: ClassListType[];

  constructor() {}

  ngOnInit() {
    console.log("****", this.viewList);
  }
}
