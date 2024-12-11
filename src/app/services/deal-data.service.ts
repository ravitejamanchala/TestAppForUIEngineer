import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface DealData {
  created: string;
  dueDate: string;
  status: string;
  customer: string;
  meters: number;
  quotes: number;
}

@Injectable({
  providedIn: 'root',
})
export class DealDataService {
  private DEALS_DATA: DealData[] = [
    {created: '09 Sep 2024', dueDate: '16 Sep 2024', status: 'Submitted', customer: 'Albion Innovations', meters: 23, quotes: 0},
    {created: '09 Sep 2024', dueDate: '16 Sep 2024', status: 'Submitted', customer: 'Thames Solutions', meters: 253, quotes: 0},
    {created: '09 Sep 2024', dueDate: '16 Sep 2024', status: 'Submitted', customer: 'Britannia Enterprises', meters: 177, quotes: 0},
    {created: '06 Sep 2024', dueDate: '13 Sep 2024', status: 'Submitted', customer: 'Sterling Ventures', meters: 98, quotes: 0},
    {created: '06 Sep 2024', dueDate: '13 Sep 2024', status: 'Negotiation', customer: 'Highland Tech', meters: 204, quotes: 0},
    {created: '06 Sep 2024', dueDate: '13 Sep 2024', status: 'Negotiation', customer: 'Windsor Industries', meters: 43, quotes: 2},
    {created: '05 Sep 2024', dueDate: '12 Sep 2024', status: 'Negotiation', customer: 'Coventry Creative', meters: 41, quotes: 4},
    {created: '05 Sep 2024', dueDate: '12 Sep 2024', status: 'Negotiation', customer: 'Regent Financial', meters: 211, quotes: 6},
    {created: '04 Sep 2024', dueDate: '10 Sep 2024', status: 'Negotiation', customer: 'Midlands Manufacturing', meters: 22, quotes: 5},
    {created: '03 Sep 2024', dueDate: '09 Sep 2024', status: 'Closed Won', customer: 'Kensington Consulting', meters: 59, quotes: 8},
    {created: '10 Sep 2024', dueDate: '17 Sep 2024', status: 'Submitted', customer: 'Albion Innovations', meters: 25, quotes: 0},
    {created: '10 Sep 2024', dueDate: '17 Sep 2024', status: 'Submitted', customer: 'Thames Solutions', meters: 255, quotes: 0},
    {created: '10 Sep 2024', dueDate: '17 Sep 2024', status: 'Submitted', customer: 'Britannia Enterprises', meters: 179, quotes: 0},
    {created: '07 Sep 2024', dueDate: '14 Sep 2024', status: 'Submitted', customer: 'Sterling Ventures', meters: 100, quotes: 0},
    {created: '07 Sep 2024', dueDate: '14 Sep 2024', status: 'Negotiation', customer: 'Highland Tech', meters: 206, quotes: 0},
    {created: '07 Sep 2024', dueDate: '14 Sep 2024', status: 'Negotiation', customer: 'Windsor Industries', meters: 45, quotes: 2},
    {created: '06 Sep 2024', dueDate: '13 Sep 2024', status: 'Negotiation', customer: 'Coventry Creative', meters: 43, quotes: 4},
    {created: '06 Sep 2024', dueDate: '13 Sep 2024', status: 'Negotiation', customer: 'Regent Financial', meters: 213, quotes: 6},
    {created: '05 Sep 2024', dueDate: '11 Sep 2024', status: 'Negotiation', customer: 'Midlands Manufacturing', meters: 24, quotes: 5},
    {created: '04 Sep 2024', dueDate: '10 Sep 2024', status: 'Closed Won', customer: 'Kensington Consulting', meters: 61, quotes: 8},
    {created: '11 Sep 2024', dueDate: '18 Sep 2024', status: 'Submitted', customer: 'Albion Innovations', meters: 27, quotes: 0},
    {created: '11 Sep 2024', dueDate: '18 Sep 2024', status: 'Submitted', customer: 'Thames Solutions', meters: 257, quotes: 0},
    {created: '11 Sep 2024', dueDate: '18 Sep 2024', status: 'Submitted', customer: 'Britannia Enterprises', meters: 181, quotes: 0},
    {created: '08 Sep 2024', dueDate: '15 Sep 2024', status: 'Submitted', customer: 'Sterling Ventures', meters: 102, quotes: 0},
    {created: '08 Sep 2024', dueDate: '15 Sep 2024', status: 'Negotiation', customer: 'Highland Tech', meters: 208, quotes: 0},
    {created: '08 Sep 2024', dueDate: '15 Sep 2024', status: 'Negotiation', customer: 'Windsor Industries', meters: 47, quotes: 2},
    {created: '07 Sep 2024', dueDate: '14 Sep 2024', status: 'Negotiation', customer: 'Coventry Creative', meters: 45, quotes: 4},
    {created: '07 Sep 2024', dueDate: '14 Sep 2024', status: 'Negotiation', customer: 'Regent Financial', meters: 215, quotes: 6},
    {created: '06 Sep 2024', dueDate: '12 Sep 2024', status: 'Negotiation', customer: 'Midlands Manufacturing', meters: 26, quotes: 5},
    {created: '05 Sep 2024', dueDate: '11 Sep 2024', status: 'Closed Won', customer: 'Kensington Consulting', meters: 63, quotes: 8},
    {created: '12 Sep 2024', dueDate: '19 Sep 2024', status: 'Submitted', customer: 'Albion Innovations', meters: 29, quotes: 0},
    {created: '12 Sep 2024', dueDate: '19 Sep 2024', status: 'Submitted', customer: 'Thames Solutions', meters: 259, quotes: 0},
    {created: '12 Sep 2024', dueDate: '19 Sep 2024', status: 'Submitted', customer: 'Britannia Enterprises', meters: 183, quotes: 0},
    {created: '09 Sep 2024', dueDate: '16 Sep 2024', status: 'Submitted', customer: 'Sterling Ventures', meters: 104, quotes: 0},
    {created: '09 Sep 2024', dueDate: '16 Sep 2024', status: 'Negotiation', customer: 'Highland Tech', meters: 210, quotes: 0},
    {created: '09 Sep 2024', dueDate: '16 Sep 2024', status: 'Negotiation', customer: 'Windsor Industries', meters: 49, quotes: 2},
    {created: '08 Sep 2024', dueDate: '15 Sep 2024', status: 'Negotiation', customer: 'Coventry Creative', meters: 47, quotes: 4},
    {created: '08 Sep 2024', dueDate: '15 Sep 2024', status: 'Negotiation', customer: 'Regent Financial', meters: 217, quotes: 6},
    {created: '07 Sep 2024', dueDate: '13 Sep 2024', status: 'Negotiation', customer: 'Midlands Manufacturing', meters: 28, quotes: 5},
    {created: '06 Sep 2024', dueDate: '12 Sep 2024', status: 'Closed Won', customer: 'Kensington Consulting', meters: 65, quotes: 8},
  ];

  getDeals(): Observable<DealData[]> {
    return of(this.DEALS_DATA); 
}
}