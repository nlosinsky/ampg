import { Injectable } from '@angular/core';
import {
  Http,
  ConnectionBackend,
  RequestOptions,
  Request,
  RequestOptionsArgs,
  Response,
  Headers
} from '@angular/http';
import { Observable } from 'rxjs';

import { LSConstants } from '../constants'

@Injectable()
export class AuthorizedHttp extends Http {
  constructor(backend: ConnectionBackend, defaultOptions: RequestOptions) {
    super(backend, defaultOptions);
  }

  request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
    const requestOptions = new RequestOptions(Object.assign(url , options));

    if (!requestOptions.headers) {
      requestOptions.headers = new Headers();
    }

    if (localStorage.getItem(LSConstants.COURSES_TOKEN)) {
      requestOptions.headers.set('Authorization', localStorage.getItem(LSConstants.COURSES_TOKEN));
    }

    return super.request(url, requestOptions);
  }
}
