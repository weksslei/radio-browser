import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RadioService {

  private API_URL = 'https://de1.api.radio-browser.info/json/stations/search?limit=10';

  constructor(private http: HttpClient) { }

  public getStations(): Observable<any> {
    return this.http.get(this.API_URL);
  }
}
