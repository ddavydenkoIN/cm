import { CmBannersState } from "../modules/pages/banners-page/store/banners.state";

export interface CmState {
  banners: CmBannersState;
}

export const cmInitialState: CmState = {
  banners: null,
}
