import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'cm-header',
  templateUrl: './cm-header.component.html',
  styleUrls: ['./cm-header.component.less']
})
export class CmHeaderComponent implements OnInit {

  @Output()
  onToggleExpandNavBar = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  toggleExpandNavBar() {
    this.onToggleExpandNavBar.emit();
  }
}
