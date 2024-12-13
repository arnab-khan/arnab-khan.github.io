import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {

  /**
 * @description A signal to store height of header in px,
 */
  header: WritableSignal<{ height?: number }> = signal({});
}