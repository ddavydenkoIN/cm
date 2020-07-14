import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CmElementsState } from './elements.state';
import { CmElementType } from '../../../models/elements';
import { CmIdType } from '../../../models/common';

export const elementsState = createFeatureSelector<CmElementsState>('elements');

export const retrieveSelectedElementData = createSelector(elementsState, (state: CmElementsState): CmIdType<CmElementType> => state && state.selected);
