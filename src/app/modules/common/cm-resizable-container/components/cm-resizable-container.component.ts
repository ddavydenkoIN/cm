import { ChangeDetectorRef, Component, Input } from '@angular/core';

@Component({
  selector: 'cm-resizable-container',
  templateUrl: './cm-resizable-container.component.html',
  styleUrls: ['./cm-resizable-container.component.less']
})
export class CmResizableContainerComponent {
  @Input()
  containerHeight: string;
  @Input()
  containerWidth: string;
  @Input()
  elementMinHeight?: number;
  @Input()
  elementMaxHeight?: number;
  @Input()
  elementMinWidth?: number;
  @Input()
  elementMaxWidth?: number;

  showActions = false;
  aspectRatio = undefined;

  constructor(private cdr: ChangeDetectorRef) {

  }

  changeAspectRation(event: Event): void {
    console.log(this);
    this.cdr.markForCheck();
  }
  stopPropogation(event: Event) {

    event.stopPropagation();
  }
}
