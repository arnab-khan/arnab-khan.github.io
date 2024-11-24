import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {
  header: WritableSignal<{ height?: number }> = signal({});
}