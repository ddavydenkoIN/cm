import { Component, OnInit } from '@angular/core';
import { CmBanner } from '../../abstract/cm-banner';

@Component({
  selector: 'cm-banner11',
  templateUrl: './cm-banner11.component.html',
  styleUrls: ['./cm-banner11.component.less']
})
export class CmBanner11Component extends CmBanner implements OnInit {

  name: string = 'CmBanner11Component';

  constructor() { super(); }

  ngOnInit() {
  }

}
