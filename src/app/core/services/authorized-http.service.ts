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

import { LSConstants } from '../constants';
import { LocalStorageService } from './local-storage-service';

@Injectable()
export class AuthorizedHttp extends Http {
  constructor(
      private backend: ConnectionBackend,
      private defaultOptions: RequestOptions,
      private localStorageService: LocalStorageService
  ) {
    super(backend, defaultOptions);
  }

  request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
    const requestOptions = new RequestOptions(Object.assign(url , options));

    if (!requestOptions.headers) {
      requestOptions.headers = new Headers();
    }

    const token = this.localStorageService.get(LSConstants.COURSES_TOKEN);

    if (token) {
      requestOptions.headers.set('Authorization', token.toString());
    }

    return super.request(url, requestOptions);
  }
}
