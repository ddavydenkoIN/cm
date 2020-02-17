import { createAction, props } from "@ngrx/store";
import { CmBannerData } from "../../../../models/elements/banners";

export enum CmBannersActionTypes {
  LOAD_DATA = "[Banners] Load All Banners",
  LOAD_DATA_SUCCESS = "[Banners] Load All Banners Success",
}

export const loadBannersData = createAction<string>(CmBannersActionTypes.LOAD_DATA);
export const loadBannersDataSuccess = createAction<string, any>(CmBannersActionTypes.LOAD_DATA_SUCCESS, props<{payload: CmBannerData[]}>());

