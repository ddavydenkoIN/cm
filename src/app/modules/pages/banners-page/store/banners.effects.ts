import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { CmHttpService } from "../../../../providers/services/cm-http.service";
import { loadBannersData, loadBannersDataSuccess } from "./banners.actions";
import { map, switchMap } from "rxjs/operators";
import { CmBannerData } from "../../../../models/elements/banners";
import { Action } from "@ngrx/store";
import { CmRoutes } from "../../../../consts";

@Injectable()
export class CmBannersEffects {

  loadBannersData$ = createEffect(() => this.actions$
    .pipe(
      ofType(loadBannersData),
      switchMap((action: Action) => this.cmHttpService.get(CmRoutes.BANNERS.LOAD_ALL_BANNERS)),
      map((banners: CmBannerData[]) => loadBannersDataSuccess({payload: banners}))
    ));

  constructor(private actions$: Actions,
              private cmHttpService: CmHttpService) {
  }

}

