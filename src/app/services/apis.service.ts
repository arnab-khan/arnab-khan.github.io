import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApisService {

  constructor(private userHttpClient: HttpClient) { }
  
  getJson<ResponseType>(path: string) {
    return this.userHttpClient.get<ResponseType>(`${path}.json`)
  }

}
