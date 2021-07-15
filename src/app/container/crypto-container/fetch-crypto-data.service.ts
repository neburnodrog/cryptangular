interface APIDataResponse {
  data: CryptoData[];
  timestamp: number;
}

export interface CryptoData {
  id: string;
  rank: string;
  symbol: string;
  name: string;
  supply: string;
  maxSupply: string;
  marketCapUsd: string;
  volumeUsd24Hr: string;
  priceUsd: string;
  changePercent24Hr: string;
  vwap24Hr: string;
  explorer: string;
}

export class FetchCryptoDataService {
  public cryptoList: CryptoData[];

  constructor() {
    this.fetchAPIData();
  }

  async fetchAPIData() {
    const response = await fetch('https://api.coincap.io/v2/assets');
    console.log(response);
    const rawData: APIDataResponse = await response.json();
    const data = rawData.data;
    console.log(data);
    this.cryptoList = data;
  }

  getCryptoList() {
    return this.cryptoList;
  }
}
