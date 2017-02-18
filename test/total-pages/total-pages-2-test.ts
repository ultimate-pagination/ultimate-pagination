import '../test-helpers';
import {getPaginationModel} from '../../src/ultimate-pagination';

describe('getPaginationModel', function() {
  describe('when there are 2 pages', function() {
    it('should return correct model for 1 of 2', function() {
      expect(getPaginationModel({ currentPage: 1, totalPages: 2 }))
        .toEqualPagination(['*1(<<)', '*1(<)', '*1', '2', '2(>)', '2(>>)']);
    });

    it('should return correct model for 2 of 2', function() {
      expect(getPaginationModel({ currentPage: 2, totalPages: 2 }))
        .toEqualPagination(['1(<<)', '1(<)', '1', '*2', '*2(>)', '*2(>>)']);
    });
  });
});
