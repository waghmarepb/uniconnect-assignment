import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  public get(url: string) {

    return this.http.get(url);
  }
  public post(url: string, data: any) {
    return this.http.post(url, data);
  }
}
