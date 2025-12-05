import { TestBed } from '@angular/core/testing';

import { ShareAccount } from './share-account';

describe('ShareAccount', () => {
  let service: ShareAccount;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShareAccount);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
