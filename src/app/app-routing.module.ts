import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { environment } from "../environments/environment";

const routes: Routes = [
  {
    path: "home",
    pathMatch: "full",
    loadChildren: () => import('./modules/pages/home-page/cm-home-page.module').then(mod => mod.CmHomePageModule)
  },
  {
    path: 'banners',
    pathMatch: 'full',
    loadChildren: () => import('./modules/pages/banners-page/cm-banners-page.module').then(mod => mod.CmBannersPageModule)
  },
  {
    path: 'playground/:type/:id',
    pathMatch: 'full',
    loadChildren: () => import('./modules/pages/playground-page/cm-playground-page.module').then(mod => mod.CmPlaygroundPageModule)
  },
  { path: '', pathMatch: 'full', redirectTo: `${environment.headUrl}` },
  //{ path: '**', loadChildren: () => import('./modules/pages/error-page/cm-error-page.module').then(mod => mod.CmErrorPageModule)}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class CmRoutingModule {}
