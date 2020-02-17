import { CmBannerData } from "../../../../models/elements/banners";
import { EntityState } from "@ngrx/entity";

export interface CmBannersState extends EntityState<CmBannerData> {
  selectedId: string;
  allBannersLoaded: boolean;
}

export const initialState: CmBannersState = {
  ids: [],
  entities: {},
  selectedId: null,
  allBannersLoaded: false,
};
