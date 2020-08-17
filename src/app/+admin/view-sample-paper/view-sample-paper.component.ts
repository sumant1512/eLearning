import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store/app.state";
import * as SamplePaperActions from "../../store/sample-paper/sample-paper.actions";
import { SamplePaperListType } from "src/app/store/sample-paper/types/sample-paper.type";
@Component({
  selector: "app-view-sample-paper",
  templateUrl: "./view-sample-paper.component.html",
  styleUrls: ["./view-sample-paper.component.css"],
})
export class ViewSamplePaperComponent implements OnInit {
  samplePaperList: SamplePaperListType[];
  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.fetchsamplePaperList();
  }
  fetchsamplePaperList(): void {
    this.store.select("samplePaperList").subscribe((response) => {
      if (Object.keys(response).length) {
        this.samplePaperList = response;
      } else {
        this.store.dispatch(new SamplePaperActions.FetchSamplePaper());
      }
    });
  }

  addSamplePaper(samplePaperDetails): void {
    console.log(samplePaperDetails);
    this.store.dispatch(
      new SamplePaperActions.AddSamplePaper(samplePaperDetails)
    );
  }
}
