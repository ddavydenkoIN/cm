import { createAction, props } from '@ngrx/store';
import { CmElement, CmElementType } from '../../../models/elements';
import { CmIdType } from '../../../models/common';

export enum CmElementsActionTypes {
  SELECT_ELEMENT_TO_EDIT = "[Elements] Select Element to edit",
}

export const selectElementToEdit = createAction<string, any>(
  CmElementsActionTypes.SELECT_ELEMENT_TO_EDIT,
  props<{payload: CmIdType<CmElementType>}>()
);

