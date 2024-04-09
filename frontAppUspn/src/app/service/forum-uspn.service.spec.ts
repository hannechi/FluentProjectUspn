import { TestBed } from '@angular/core/testing';

import { ForumUspnService } from './forum-uspn.service';

describe('ForumUspnService', () => {
  let service: ForumUspnService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForumUspnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
