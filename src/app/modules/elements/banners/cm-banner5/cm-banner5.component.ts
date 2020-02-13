import { Component, OnInit } from '@angular/core';
import { CmBanner } from "../../abstract/cm-banner";

@Component({
  selector: 'cm-banner5',
  templateUrl: './cm-banner5.component.html',
  styleUrls: ['./cm-banner5.component.less']
})
export class CmBanner5Component extends CmBanner implements OnInit {

  name: string = 'CmBanner5Component';

  constructor() { super(); }

  ngOnInit() {
  }

}
