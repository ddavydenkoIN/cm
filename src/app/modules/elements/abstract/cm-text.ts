import { Input, Directive } from "@angular/core";
import { CmTextModel } from "../../../models/common";

@Directive()
export class CmText {
  @Input()
  text: CmTextModel;
}
