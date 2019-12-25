import { Injectable } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { CmLanguagesEnum } from "../../../enums";

@Injectable()
export class CmTranslateService {
  constructor(private translateService: TranslateService) {
  }

  getInstantTranslation(key: string): string {
    return this.translateService.instant(key);
  }

  getTranslationMap(lang: string) {
    return this.translateService.getTranslation(lang);
  }

  use(lang: CmLanguagesEnum): void {
    this.translateService.use(lang);
  }

  getCurrentLang() {
    return this.translateService.currentLang;
  }

  onLangChange() {
    return this.translateService.onLangChange;
  }
}
