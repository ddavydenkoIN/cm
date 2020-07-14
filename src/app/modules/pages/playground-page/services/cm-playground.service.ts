import { Injectable } from '@angular/core';
import { CmBannerData, CmElement, CmElementType } from '../../../../models/elements';
import { Observable, of } from 'rxjs';
import { CmBannersPageService } from '../../banners-page/services/banners-page.service';
import { CmElementsStoreService } from '../../../elements/store/elements-store.service';
import { CmElementsService } from '../../../elements/service/elements.service';

@Injectable()
export class CmPlaygroundService {
  constructor(private bannersService: CmBannersPageService,
              private elementsStoreService: CmElementsStoreService,
              private elementsService: CmElementsService) {

  }

  retrieveElementByType(type: CmElementType, id: string): Observable<CmBannerData> {
    switch (type) {
      case "banner": return this.bannersService.retrieveBannerById(id);
      break;
      default: of(null);
    }
  }

  selectElementToEdit(type: CmElementType, id: string): void {
    this.elementsService.selectElement({type, id});
  }

  retrieveSelectedElement(): Observable<CmElement> {
    return this.elementsStoreService.retrieveSelectedElementData();
  }
}
