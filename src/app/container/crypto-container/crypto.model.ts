export interface AssetsResponse {
  data: CryptoAssetData[];
  timestamp: number;
}

export interface HistoryResponse {
  data: CryptoHistoryData[];
  timestamp: number;
}

export interface AssetByIdResponse {
  timestamp: number;
  data: CryptoAssetData;
}

export interface CryptoAssetData {
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

export interface CryptoHistoryData {
  priceUsd: string;
  time: number;
  date: string;
}
