import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIDataResponse } from './crypto.model';

@Injectable({ providedIn: 'root' })
export class GetCryptoDataService {
  constructor(private http: HttpClient) {}

  getCryptoList() {
    return this.http.get<APIDataResponse>('https://api.coincap.io/v2/assets');
  }
}
