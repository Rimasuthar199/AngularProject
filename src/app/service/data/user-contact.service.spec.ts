import { TestBed } from '@angular/core/testing';

import { UserContactService } from './user-contact.service';

describe('UserContactService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserContactService = TestBed.get(UserContactService);
    expect(service).toBeTruthy();
  });
});
