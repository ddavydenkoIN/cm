import { HttpHeaders, HttpParams } from "@angular/common/http";

export class CmRestApiRequestOptions {
  headers?: HttpHeaders;
  observe?: any = 'body';
  params?: HttpParams;
  reportProgress?: boolean;
  responseType?: any = 'json';
  withCredentials?: boolean;
}

export class CmRestApiOptions {
  urlParameters?: Object;
  request?: CmRestApiRequestOptions;
}
