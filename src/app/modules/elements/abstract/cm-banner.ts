import { Input, OnInit, Directive } from "@angular/core";
import { CmBannerBackgroundImages } from "../../../models/elements/banners";
import { CmText } from "./cm-text";
import { CmImagesModel } from "../../../models/common";


@Directive()
export class CmBanner extends CmText implements OnInit {

  @Input()
  images?: CmImagesModel;

  @Input()
  backgroundImages?: CmBannerBackgroundImages;

  @Input()
  backgroundColor?: string;

  ngOnInit() {
  }

}
