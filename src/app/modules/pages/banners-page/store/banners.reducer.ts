import { Action, createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter } from "@ngrx/entity";
import { CmBannerData } from "../../../../models/elements/banners";
import { loadBannersDataSuccess } from "./banners.actions";
import { CmBannersState, initialState } from "./banners.state";

export const cmBannersAdapter: EntityAdapter<CmBannerData> = createEntityAdapter<CmBannerData>();

const _bannersReducer = createReducer(initialState,
  on(loadBannersDataSuccess, (state, action) => cmBannersAdapter.addAll(
    action.payload,
    {...state, allBannersLoaded: true}
  )),
);

export function bannersReducer(state: CmBannersState | undefined,
                               action: Action) {
  return _bannersReducer(state, action);
}
