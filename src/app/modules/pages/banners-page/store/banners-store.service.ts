import { Injectable } from "@angular/core";
import { CmState } from "../../../../root-store/state";
import { select, Store } from "@ngrx/store";
import { loadBannersData } from "./banners.actions";
import { CmBannerData } from "../../../../models/elements/banners";
import { retrieveAllBanners } from "./banners.selectors";
import { Observable } from "rxjs";

@Injectable()
export class CmBannersStoreService {
  constructor(private store$: Store<CmState>) {}

  loadBannersData(): void {
    this.store$.dispatch(loadBannersData());
  }

  retrieveAllBanners(): Observable<CmBannerData[]> {
    return this.store$.pipe(select(retrieveAllBanners));
  }

}
