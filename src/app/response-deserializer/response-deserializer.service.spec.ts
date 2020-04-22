import { TestBed } from '@angular/core/testing';

import { ResponseDeserializerService } from './response-deserializer.service';

describe('ResponseDeserializerService', () => {
  let service: ResponseDeserializerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResponseDeserializerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
