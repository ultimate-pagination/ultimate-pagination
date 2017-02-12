import './test-helpers';
import {getPaginationModel} from '../src/ultimate-pagination';

describe('getPaginationModel', function() {
  describe('when there are 3 pages', function() {
    it('should return correct model for 1 of 3', function() {
      expect(getPaginationModel({ currentPage: 1, totalPages: 3 }))
        .toEqualPagination(['*1(<<)', '*1(<)', '*1', '2', '3', '2(>)', '3(>>)']);
    });

    it('should return correct model for 2 of 3', function() {
      expect(getPaginationModel({ currentPage: 2, totalPages: 3 }))
        .toEqualPagination(['1(<<)', '1(<)', '1', '*2', '3', '3(>)', '3(>>)']);
    });

    it('should return correct model for 3 of 3', function() {
      expect(getPaginationModel({ currentPage: 3, totalPages: 3 }))
        .toEqualPagination(['1(<<)', '2(<)', '1', '2', '*3', '*3(>)', '*3(>>)']);
    });
  });
});
