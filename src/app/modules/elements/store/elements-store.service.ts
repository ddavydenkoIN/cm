import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { CmBannerData, CmElement, CmElementType } from '../../../models/elements';
import { CmState } from '../../../root-store/state';
import { selectElementToEdit } from './elements.actions';
import { Observable } from 'rxjs';
import { CmIdType } from '../../../models/common';
import { map, switchMap } from 'rxjs/operators';
import { retrieveSelectedElementData } from './elements.selectors';
import { CmBannersStoreService } from '../../pages/banners-page/store/banners-store.service';
import { BANNERS_MAP } from '../banners/cm-banners.module';


@Injectable({providedIn: 'root'})
export class CmElementsStoreService {
  constructor(private store$: Store<CmState>,
              private bannersStoreService: CmBannersStoreService) {}

  selectElementToEdit(data: CmIdType<CmElementType>): void {
    this.store$.dispatch(selectElementToEdit({id: data.id, elementType: data.type}));
  }

  retrieveSelectedElementData(): Observable<CmElement> {
    return this.store$.select(retrieveSelectedElementData)
      .pipe(
        switchMap((data: CmIdType<CmElementType>) => {
          switch (data.type) {
            case 'banner': {
              return this.bannersStoreService.retrieveBannerById(data.id);
            }
          }
        }),
        map((element: CmElement) => ({
            ...element,
            component: BANNERS_MAP[Number.parseInt(element.id, 10)],
          }),
        )
      );
  }
}
