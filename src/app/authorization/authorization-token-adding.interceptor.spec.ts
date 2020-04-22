import { TestBed } from '@angular/core/testing';

import { AuthorizationTokenAddingInterceptor } from './authorization-token-adding.interceptor';

describe('AuthorizationTokenAddingInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AuthorizationTokenAddingInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: AuthorizationTokenAddingInterceptor = TestBed.inject(AuthorizationTokenAddingInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
