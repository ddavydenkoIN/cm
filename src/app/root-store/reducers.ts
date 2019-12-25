import {ActionReducerMap, MetaReducer} from '@ngrx/store';
import {routerReducer} from '@ngrx/router-store';
import {storeFreeze} from 'ngrx-store-freeze';

import {CmState} from './state';
import {environment} from '../../environments/environment';

export const metaReducers: MetaReducer<CmState>[] = !environment.production ? [storeFreeze] : [];

export const cmReducers: ActionReducerMap<CmState> = {
  router: routerReducer
};
