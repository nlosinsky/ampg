import { Injectable } from '@angular/core';
import { Response, RequestOptionsArgs } from '@angular/http';
import { AuthorizedHttp } from './authorized-http.service';

import { Observable } from 'rxjs';

@Injectable()
export class RestService {
  HOST:string = 'http://localhost:3004';

  constructor(
    private authorizedHttp: AuthorizedHttp
  ) { }

  get(url: string, options?: RequestOptionsArgs): Observable<any> {
    return this.authorizedHttp.get(this.getUrl(url), options).map((resp: Response) => resp.json());
  }

  delete(url: string, options?: RequestOptionsArgs): Observable<any> {
    return this.authorizedHttp.delete(this.getUrl(url), options).map((resp: Response) => resp.json());
  }

  post(url: string, data?: Object, options?: RequestOptionsArgs): Observable<any> {
    return this.authorizedHttp.post(this.getUrl(url), data, options).map((resp: Response) => resp.json());
  }

  put(url: string, data?: Object, options?: RequestOptionsArgs): Observable<any> {
    return this.authorizedHttp.put(this.getUrl(url), data, options).map((resp: Response) => resp.json());
  }

  getUrl(url: string): string {
    return `${this.HOST}${url}`;
  }
}
