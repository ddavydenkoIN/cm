import { Component, OnInit } from '@angular/core';
import { CmBanner } from "../../abstract/cm-banner";

@Component({
  selector: 'cm-banner2',
  templateUrl: './cm-banner2.component.html',
  styleUrls: ['./cm-banner2.component.less'],
})
export class CmBanner2Component extends CmBanner implements OnInit {

  name: string = 'CmBanner2Component';

  constructor() { super(); }

  ngOnInit() {
  }

}
