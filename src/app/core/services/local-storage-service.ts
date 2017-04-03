import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {
  constructor() {}

  set(key: string, val: any): void {
    let value = val;

    if (typeof value === 'object') {
      value = JSON.stringify(val);
    }

    localStorage.setItem(key, value);
  }

  get(key: string): string|Object  {
    const str = localStorage.getItem(key);
    let value;

    try {
      value = JSON.parse(str);
    } catch (e) {
      value = str;
    }

    return value;
  }

  remove(key: string): void {
    localStorage.removeItem(key);
  }
}
