import { Component, OnInit } from '@angular/core';
import { CmBanner } from "../../abstract/cm-banner";

@Component({
  selector: 'cm-banner3',
  templateUrl: './cm-banner3.component.html',
  styleUrls: ['./cm-banner3.component.less']
})
export class CmBanner3Component extends CmBanner implements OnInit {

  constructor() { super(); }

  ngOnInit() {
  }

}
