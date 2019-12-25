import { Pipe } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

import { CmBypassSecurityType } from "../../enums";

@Pipe({name: 'safe'})
export class CmSafePipe {
  constructor(private sanitizer: DomSanitizer) {
  }

  transform(value: string,  type: CmBypassSecurityType) {
    switch (type) {
      case CmBypassSecurityType.HTML:
        return this.sanitizer.bypassSecurityTrustHtml(value);
        break;
      case CmBypassSecurityType.RESOURCE_URL:
        return this.sanitizer.bypassSecurityTrustResourceUrl(value);
        break;
      case CmBypassSecurityType.SCRIPT:
        return this.sanitizer.bypassSecurityTrustScript(value);
        break;
      case CmBypassSecurityType.STYLE:
        return this.sanitizer.bypassSecurityTrustStyle(value);
        break;
      case CmBypassSecurityType.URL:
        return this.sanitizer.bypassSecurityTrustUrl(value);
    }
  }
}
