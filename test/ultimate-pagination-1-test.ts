import './test-helpers';
import {getPaginationModel} from '../src/ultimate-pagination';

describe('getPaginationModel', function() {
  describe('when there is 1 page', function() {
    it('should return correct model for 1 of 1', function() {
      expect(getPaginationModel({ currentPage: 1, totalPages: 1 }))
        .toEqualPagination(['*1(<<)', '*1(<)', '*1', '*1(>)', '*1(>>)']);
    });
  });
});
