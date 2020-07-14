import { Injectable } from '@angular/core';
import { CmElementsStoreService } from '../store/elements-store.service';
import { CmElement, CmElementType } from '../../../models/elements';
import { CmIdType } from '../../../models/common';

@Injectable({providedIn: 'root'})
export class CmElementsService {
  constructor(private elementsStoreService: CmElementsStoreService) {}

  selectElement(data: CmIdType<CmElementType>): void {
    this.elementsStoreService.selectElementToEdit(data);
  }
}
