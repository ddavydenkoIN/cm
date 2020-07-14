import { CmIdType } from '../../../models/common';
import { CmElementType } from '../../../models/elements';

export interface CmElementsState {
  selected: CmIdType<CmElementType>;
}

export const initialState: CmElementsState = {
  selected: null
};
