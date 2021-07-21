import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  AssetByIdResponse,
  AssetsResponse,
  HistoryResponse,
} from './crypto.model';

@Injectable({ providedIn: 'root' })
export class GetCryptoDataService {
  constructor(private http: HttpClient) {}

  getCryptoList() {
    return this.http.get<AssetsResponse>('https://api.coincap.io/v2/assets');
  }

  getCryptoAsset(id: string) {
    return this.http.get<AssetByIdResponse>(
      'https://api.coincap.io/v2/assets/' + id
    );
  }

  getCryptoHistory(id: string, interval: string, start: number, end: number) {
    const url = `https://api.coincap.io/v2/assets/${id}/history`;

    let searchParams = new HttpParams();
    searchParams = searchParams.append('interval', interval);
    searchParams = searchParams.append('start', start);
    searchParams = searchParams.append('end', end);

    return this.http.get<HistoryResponse>(url, { params: searchParams });
  }
}
