import { TestBed } from '@angular/core/testing';

import { SortService } from './sort.service';

describe('SortService', () => {
  let service: SortService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SortService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // ================================================================================

  const ascendingSortTests = [
    // Test case 1: Sorting numbers in ascending order.
    {
      input: [{ id: 2, name: 'B' }, { id: 1, name: 'A' }, { id: 3, name: 'C' }],
      orderKey: 'id',
      expected: [{ id: 1, name: 'A' }, { id: 2, name: 'B' }, { id: 3, name: 'C' }],
    },
    // Test case 2: Sorting by string property `name` in ascending order.
    {
      input: [{ id: 3, name: 'C' }, { id: 2, name: 'B' }, { id: 1, name: 'A' }],
      orderKey: 'name',
      expected: [{ id: 1, name: 'A' }, { id: 2, name: 'B' }, { id: 3, name: 'C' }],
    },
    // Test case 3: Sorting objects with equal `id`.
    {
      input: [{ id: 2, name: 'B' }, { id: 2, name: 'A' }, { id: 2, name: 'C' }],
      orderKey: 'name',
      expected: [{ id: 2, name: 'A' }, { id: 2, name: 'B' }, { id: 2, name: 'C' }],
    },
    // Test case 4: Sorting numbers in reverse order (just to ensure ascending sort works).
    {
      input: [{ id: 5, name: 'E' }, { id: 4, name: 'D' }, { id: 6, name: 'F' }],
      orderKey: 'id',
      expected: [{ id: 4, name: 'D' }, { id: 5, name: 'E' }, { id: 6, name: 'F' }],
    },
    // Test case 5: Sorting empty array.
    {
      input: [],
      orderKey: 'id',
      expected: [],
    },
    // Test case 6: Sorting by mixed string case (make sure case-sensitivity is handled as expected).
    {
      input: [{ id: 1, name: 'apple' }, { id: 2, name: 'Banana' }, { id: 3, name: 'cherry' }],
      orderKey: 'name',
      expected: [
        { id: 2, name: 'Banana' },
        { id: 1, name: 'apple' },
        { id: 3, name: 'cherry' }
      ],
    },
  ];
  ascendingSortTests.forEach((element, index) => {
    it(`should correctly sort input array (test case ${index + 1})`, () => {
      const orderKey = element.orderKey as 'id' | 'name';
      const result = service.ascendingSort(element.input, orderKey);
      expect(result).toEqual(element.expected);
    });
  });
});
