import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";

import { CmObject, CmRestApiOptions } from '../../models';
import { errorHandler } from "../error-handler";
import { CmRestMethodEnum } from "../../enums";

@Injectable({providedIn: 'root'})
export class CmHttpService {

  constructor(private http: HttpClient) { }

  get(url: string, options: CmRestApiOptions = {}, modelClass?: any): Observable<any> {
    return this.http.get(this.buildUrl(CmRestMethodEnum.GET, url, options.urlParameters), options.request)
      .pipe(
        errorHandler(url)
      );
  }

  private buildUrl(method: CmRestMethodEnum, rawUrl: string, urlParams: CmObject): string {
    if (!urlParams) {
      return rawUrl;
    }

    return Object
      .entries(urlParams)
      .reduce((acc, [key, value]): string => {
        acc = acc.replace(':' + key, value);
        return acc;
      }, rawUrl);
  }
}
