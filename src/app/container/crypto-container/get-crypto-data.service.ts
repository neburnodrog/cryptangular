import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  AssetByIdResponse,
  AssetsResponse,
  CryptoAssetData,
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

  getCryptoHistory(id: string, interval: string, start?: string, end?: string) {
    if (!start || !end) {
      const now = Date.now();
      end = now.toString();
      start = (now - 30 * 24 * 60 * 60 * 1000).toString();
    }

    const url = `https://api.coincap.io/v2/assets/${id}/history`;

    let searchParams = new HttpParams();
    searchParams = searchParams.append('interval', interval);
    searchParams = searchParams.append('start', start);
    searchParams = searchParams.append('end', end);

    return this.http.get<HistoryResponse>(url, { params: searchParams });
  }
}
