import { Input, Directive } from "@angular/core";
import { CmTextModel } from "../../../models/common";

export class CmText {
  @Input()
  text: CmTextModel;
}
