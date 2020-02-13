import { Component, OnInit } from '@angular/core';
import { CmBanner } from "../../abstract/cm-banner";

@Component({
  selector: 'cm-banner9',
  templateUrl: './cm-banner9.component.html',
  styleUrls: ['./cm-banner9.component.less']
})
export class CmBanner9Component extends CmBanner implements OnInit {

  name: string = 'CmBanner9Component';

  constructor() { super(); }

  ngOnInit() {
  }

}
