import { Injectable } from '@angular/core';
import { Response, RequestOptionsArgs } from '@angular/http';
import { AuthorizedHttp } from './authorized-http.service';

import { Observable } from 'rxjs';

@Injectable()
export class RestService {
  constructor(
    private authorizedHttp: AuthorizedHttp
  ) { }

  get(url: string, options?: RequestOptionsArgs): Observable<any> {
    return this.authorizedHttp.get(url, options).map((resp: Response) => resp.json());
  }

  delete(url: string, options?: RequestOptionsArgs): Observable<any> {
    return this.authorizedHttp.delete(url, options).map((resp: Response) => resp.json());
  }

  post(url: string, data?: Object, options?: RequestOptionsArgs): Observable<any> {
    return this.authorizedHttp.post(url, data, options).map((resp: Response) => resp.json());
  }
}
