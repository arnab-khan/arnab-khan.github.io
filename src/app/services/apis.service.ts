import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApisService {

  constructor(private userHttpClient: HttpClient) { }

  /**
  * @description Retrieves JSON data from the specified API endpoint.
  * 
  * @param {string} path - The relative path (without '.json').
  * @returns {Observable<ResponseType>} An Observable that emits the response data of the requested API endpoint.
  * @template ResponseType - The type of the data expected from the API, allowing the method to be generic.
  */
  getJson<ResponseType>(path: string) {
    return this.userHttpClient.get<ResponseType>(`${path}.json`)
  }

}
