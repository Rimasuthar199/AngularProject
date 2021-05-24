import { TestBed } from '@angular/core/testing';

import { UserUpdateDataService } from './user-update-data.service';

describe('UserUpdateDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserUpdateDataService = TestBed.get(UserUpdateDataService);
    expect(service).toBeTruthy();
  });
});
