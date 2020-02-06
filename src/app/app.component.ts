import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CmLanguagesEnum } from './enums/common';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: []
})
export class AppComponent {

  constructor(private translateService: TranslateService) {
    translateService.addLangs([CmLanguagesEnum.ENG, CmLanguagesEnum.RUS]);
    translateService.setDefaultLang(CmLanguagesEnum.ENG);

    const browserLang = translateService.getBrowserLang();
    translateService.use(browserLang.match(/en|ru/) ? browserLang : 'en');
    translateService.use(CmLanguagesEnum.ENG);
  }
}
