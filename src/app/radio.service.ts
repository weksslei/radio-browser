import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RadioService {

  private API_URL = 'https://de1.api.radio-browser.info/json/stations/search?limit=10';

  private BASE_URL = 'https://de1.api.radio-browser.info/json/stations/search';

  constructor(private http: HttpClient) { }

  public getStations(): Observable<any> {

    return this.http.get(this.API_URL);
  }

  getStationsBrazil(limit: number = 10): Observable<any[]> {
    return this.http.get<any[]>(`${this.BASE_URL}?limit=${limit}&country=Brazil`);
  }

  getStationsByCategory(category: string, limit: number = 10): Observable<any[]> {
    return this.http.get<any[]>(`${this.BASE_URL}?tag=${category}&limit=${limit}&country=Brazil`);
  }

  searchStations(query: string, limit: number = 10): Observable<any[]> {
    return this.http.get<any[]>(`${this.BASE_URL}?name=${query}&limit=${limit}&country=Brazil`);
  }
}
