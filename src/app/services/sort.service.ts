import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SortService {

  ascendingSort<T>(array: T[], orderKey: keyof T): T[] {
    return array.sort((a, b) => 
      (a[orderKey] > b[orderKey]) ? 1 : ((b[orderKey] > a[orderKey]) ? -1 : 0)
    );
  }
  
}
