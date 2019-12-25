import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { environment } from "../environments/environment";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: `${environment.headUrl}` },
  { path: '**', loadChildren: () => import('./modules/pages/error-page/cm-error-page.module').then(mod => mod.CmErrorPageModule)}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class CmRoutingModule {}
