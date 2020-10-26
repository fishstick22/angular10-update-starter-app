import { SortableColumnService } from 'app/shared/services/sortable-column.service';

import { SortableTableDirective } from './sortable-table.directive';

describe('SortableTableDirective', () => {
  it('should create an instance', () => {
    const sortService: SortableColumnService = new SortableColumnService();
    const directive = new SortableTableDirective(sortService);
    expect(directive).toBeTruthy();
  });
});
