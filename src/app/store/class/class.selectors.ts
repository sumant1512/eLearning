import { createSelector, MemoizedSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { ClassListType } from "./types/class.type";

export const fetchClassList = (state: AppState) => state.classList;

export const fetchUnassingedClass = (assingedClassIds: number[]) =>
  createSelector(fetchClassList, (state) => {
    let unAssingedClassList: ClassListType[] = [];
    if (!(state === [] || state === undefined)) {
      state.forEach((classes) => {
        if (!assingedClassIds.includes(classes.class_id)) {
          unAssingedClassList.push(classes);
        }
      });
    }
    return unAssingedClassList;
  });
