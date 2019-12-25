import { Component } from '@angular/core';

@Component({
  selector: 'cm-error-page',
  template: `
      <img src="../../../../../assets/img/not-found/not-found-panda.webp" class="notFoundPic">
      <span class="errorMessage">{{"NOT_FOUND.MESSAGE" | translate}}</span>
  `,
  styleUrls: ['./cm-error-page.component.less']
})
export class CmErrorPageComponent {
}

