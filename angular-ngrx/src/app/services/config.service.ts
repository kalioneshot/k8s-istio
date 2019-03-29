import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Config } from '../models/config';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  // configUrl = `${environment.apiUrl}config.json`;

  url = '/api/config';

  constructor(private http: HttpClient) { }

  getConfig(): Observable<Config> {
    return this.http.get<Config>(this.url);
  }

}
