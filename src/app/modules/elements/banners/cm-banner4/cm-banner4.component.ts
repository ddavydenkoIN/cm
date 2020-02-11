import { Component, OnInit } from '@angular/core';
import { CmBanner } from "../../abstract/cm-banner";

@Component({
  selector: 'cm-banner4',
  templateUrl: './cm-banner4.component.html',
  styleUrls: ['./cm-banner4.component.less']
})
export class CmBanner4Component extends CmBanner implements OnInit {

  constructor() { super(); }

  ngOnInit() {
  }

}
