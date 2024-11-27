import { TestBed } from '@angular/core/testing';

import { ApisService } from './apis.service';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';

describe('ApisService', () => {
  let service: ApisService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    });
    service = TestBed.inject(ApisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
