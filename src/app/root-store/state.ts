import { CmBannersState } from "../modules/pages/banners-page/store/banners.state";
import { CmElementsState } from '../modules/elements/store/elements.state';

export interface CmState {
  banners: CmBannersState;
  elements: CmElementsState;
}

export const cmInitialState: CmState = {
  banners: null,
  elements: {
    selected: {
      id: null,
      type: null,
    },
  }
};
