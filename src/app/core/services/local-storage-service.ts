import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {
  constructor() {}

  set(key, val) {
    let value = val;

    if (typeof value === 'object') {
      value = JSON.stringify(val);
    }

    localStorage.setItem(key, value);
  }

  get(key) {
    const str = localStorage.getItem(key);
    let value;

    try {
      value = JSON.parse(str);
    } catch (e) {
      value = str;
    }

    return value;
  }

  remove(key) {
    return localStorage.removeItem(key);
  }
}
