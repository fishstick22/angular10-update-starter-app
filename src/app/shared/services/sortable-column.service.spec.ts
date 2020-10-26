import { TestBed, inject } from '@angular/core/testing';

import { SortableColumnService } from './sortable-column.service';

describe('SortableColumnService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SortableColumnService]
    });
  });

  it('should be created', inject([SortableColumnService], (service: SortableColumnService) => {
    expect(service).toBeTruthy();
  }));
});
