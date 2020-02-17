import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';

import { CmState } from './state';
import { environment } from '../../environments/environment';
import { bannersReducer } from "../modules/pages/banners-page/store/banners.reducer";

export const metaReducers: MetaReducer<CmState>[] = !environment.production ? [storeFreeze] : [];

export const cmReducers: ActionReducerMap<CmState> = {
  banners: bannersReducer,
};
