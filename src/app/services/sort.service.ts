import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SortService {

  /**
   * Sorts an array of objects in ascending order based on the specified key.
   * 
   * @param array - The array of objects to be sorted.
   * @param orderKey - The key by which the array will be sorted. Must be a valid key of the object type in the array.
   * @returns The sorted array in ascending order based on the given key.
   */
  ascendingSort<T>(array: T[], orderKey: keyof T): T[] {
    return array.sort((a, b) =>
      (a[orderKey] > b[orderKey]) ? 1 : ((b[orderKey] > a[orderKey]) ? -1 : 0)
    );
  }

}
