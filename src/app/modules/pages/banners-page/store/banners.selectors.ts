import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CmBannersState } from './banners.state';
import { cmBannersAdapter } from './banners.reducer';
import { CmBannerData } from '../../../../models/elements/banners';
import { Dictionary } from '@ngrx/entity';

export const getBannersState = createFeatureSelector<CmBannersState>('banners');

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = cmBannersAdapter.getSelectors(getBannersState);

export const retrieveAllBanners = selectAll;

export const retrieveBannerById = createSelector(
  selectEntities,
  (entities: Dictionary<CmBannerData>, id: string): CmBannerData => entities[id]
);
