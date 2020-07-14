import { Injectable } from '@angular/core';
import { CmPlaygroundService } from '../../services/cm-playground.service';
import { CmPlaygroundFormData } from '../../../../../models/playground';
import { filter, map } from 'rxjs/operators';
import { BannerToPlaygroundDataConverter } from '../../utils/banner-to-playground-data-converter';
import { Observable } from 'rxjs';

@Injectable()
export class CmPlaygroundFormService {
  constructor(private playgroundService: CmPlaygroundService) {}

  getElementData(): Observable<CmPlaygroundFormData> {
    return this.playgroundService.retrieveSelectedElement()
      .pipe(
        filter(element => !!element),
        map(element => {
          switch (element.type) {
            case 'banner': return new BannerToPlaygroundDataConverter(element).convert();
          }
        })
      );
  }
}
