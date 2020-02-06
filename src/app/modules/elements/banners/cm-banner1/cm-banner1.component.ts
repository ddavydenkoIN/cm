import { Component, OnInit } from '@angular/core';
import { CmBanner } from "../../abstract/cm-banner";

@Component({
  selector: 'cm-banner1',
  templateUrl: './cm-banner1.component.html',
  styleUrls: ['./cm-banner1.component.less']
})
export class CmBanner1Component extends CmBanner implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
