import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TimeResolver {
  getDate() {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    return today.valueOf();
  }

  getOneMonthAgo(timestamp: number) {
    return timestamp - 30 * 24 * 3600 * 1000;
  }
}
