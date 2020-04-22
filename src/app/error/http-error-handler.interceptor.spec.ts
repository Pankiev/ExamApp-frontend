import { TestBed } from '@angular/core/testing';

import { HttpErrorLoggingInterceptor } from './http-error-logging-interceptor.service';

describe('HttpErrorHandlerInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HttpErrorLoggingInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: HttpErrorLoggingInterceptor = TestBed.inject(HttpErrorLoggingInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
