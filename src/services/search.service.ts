import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private apiKey = 'TAnVw9LWs1L1Qu3gJQliYLNRIN07LEwdm1L7oeZAEVdnJeWlgPLZaC7zcLalBy5qa';
  private apiUrl = 'https://api.bing.microsoft.com/v7.0/search';

  constructor(private http: HttpClient) {}

  search(query: string): Observable<any> {
    const headers = new HttpHeaders().set('Ocp-Apim-Subscription-Key', this.apiKey);
    return this.http.get(`${this.apiUrl}?q=${query}`, { headers });
  }
}
