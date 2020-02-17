import { createFeatureSelector } from "@ngrx/store";
import { CmBannersState } from "./banners.state";
import { cmBannersAdapter } from "./banners.reducer";

export const getBannersState = createFeatureSelector<CmBannersState>('banners');

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = cmBannersAdapter.getSelectors(getBannersState);

export const retrieveAllBanners = selectAll;
