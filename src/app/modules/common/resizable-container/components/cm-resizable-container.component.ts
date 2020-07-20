import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { CmResizableContainerService } from '../services/cm-resizable-container.service';
import { CmNameValue } from '../../../../models/common';

@Component({
  selector: 'cm-resizable-container',
  templateUrl: './cm-resizable-container.component.html',
  styleUrls: ['./cm-resizable-container.component.less'],
  providers: [CmResizableContainerService],
})
export class CmResizableContainerComponent implements OnInit {
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

  aspectRatioOptions: CmNameValue<string, number>[];

  constructor(private cdr: ChangeDetectorRef,
              private resizableContainerService: CmResizableContainerService) {
  }

  ngOnInit(): void {
    this.aspectRatioOptions = this.resizableContainerService.getAspectRatioOptions();
  }
}
