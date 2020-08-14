import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { editForm } from "../common.utils";
import { ClassListType } from "src/app/store/class/types/class.type";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store/app.state";
import * as ClassActions from "../../store/class/class.actions";

@Component({
  selector: "app-common-view",
  templateUrl: "./common-view.component.html",
  styleUrls: ["./common-view.component.css"],
})
export class CommonViewComponent implements OnInit {
  editForm: FormGroup;
  classList: ClassListType[];
  @Input() viewList: any;
  @Input() name: string;
  @Output() childEvent = new EventEmitter();
  @Output() editChildEvent = new EventEmitter();
  @Output() assignClassChildEvent = new EventEmitter();
  oldName: string;
  editId: number;
  constructor(private store: Store<AppState>) {
    this.editForm = editForm();
  }

  ngOnInit() {
    this.checkStatus();
    this.fetchClassList();
  }

  fetchClassList(): void {
    this.store.select("classList").subscribe((response) => {
      if (Object.keys(response).length) {
        this.classList = response;
      } else {
        this.store.dispatch(new ClassActions.FetchClass());
      }
    });
  }
  checkStatus(): boolean {
    if ("Subject" === this.name) return false;
    return true;
  }
  remove(id) {
    this.childEvent.emit(id);
  }
  selectedItem(name, id) {
    this.oldName = name;
    this.editId = id;
  }
  selectSubject(subjectId) {
    this.assignClassChildEvent.emit({ subjectId });
  }
  edit() {
    this.editChildEvent.emit({
      newName: this.editForm.value.newitemName,
      id: this.editId,
    });
  }
}
