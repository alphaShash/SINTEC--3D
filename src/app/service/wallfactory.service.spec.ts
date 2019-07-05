import { TestBed } from '@angular/core/testing';

import { WallFactoryService } from './wallfactory.service';

describe('WallFactoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WallFactoryService = TestBed.get(WallFactoryService);
    expect(service).toBeTruthy();
  });
});
