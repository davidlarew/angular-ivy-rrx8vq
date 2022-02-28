import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  jsonFile = '../assets/products.json';

  baseUrl = "https://www.omdbapi.com/?s=$";
  apiKey = '&apiKey=c296f12b';

  constructor(private http: HttpClient) {}

  getData(searchValue): Promise<any> {
    const url = this.baseUrl + searchValue + this.apiKey;
    return this.http.get(url).toPromise();
  }
}