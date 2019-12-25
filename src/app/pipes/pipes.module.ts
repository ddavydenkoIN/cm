import { NgModule } from "@angular/core";

import { CmSafePipe } from "./pipes/safe.pipe";

const PIPES_LIST = [
  CmSafePipe
];

@NgModule({
  declarations: PIPES_LIST,
  exports: PIPES_LIST
})
export class CmPipesModule {
}
