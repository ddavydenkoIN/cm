import { Injectable } from '@angular/core';
import { CmNameId, CmNameValue } from '../../../../models/common';

@Injectable()
export class CmResizableContainerService {
  getAspectRatioOptions(): CmNameValue<string, number>[] {
    return [
      { name: "Manual", value: null },
      { name: "50:50", value: 1 },
      { name: "16:9", value: 1.7777778 },
      { name: "4:3", value: 1.333333 },
    ];
  }
}
