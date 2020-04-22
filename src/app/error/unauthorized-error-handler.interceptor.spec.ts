import { TestBed } from '@angular/core/testing';

import { UnauthorizedErrorHandlerInterceptor } from './unauthorized-error-handler.interceptor';

describe('UnauthorizedErrorHandlerInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      UnauthorizedErrorHandlerInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: UnauthorizedErrorHandlerInterceptor = TestBed.inject(UnauthorizedErrorHandlerInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
