import { TestBed } from '@angular/core/testing';

import { CheckIsAuthPathService } from './check-is-auth-path.service';

describe('CheckIsAuthPathService', () => {
  let service: CheckIsAuthPathService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckIsAuthPathService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
