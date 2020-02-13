import { Component, OnInit } from '@angular/core';
import { CmBanner } from "../../abstract/cm-banner";

@Component({
  selector: 'cm-banner10',
  templateUrl: './cm-banner10.component.html',
  styleUrls: ['./cm-banner10.component.less']
})
export class CmBanner10Component extends CmBanner implements OnInit {

  name: string = 'CmBanner10Component';

  constructor() { super(); }

  ngOnInit() {
  }

}
