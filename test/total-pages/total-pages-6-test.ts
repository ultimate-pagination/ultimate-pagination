import '../test-helpers';
import {getPaginationModel} from '../../src/ultimate-pagination';

describe('getPaginationModel', function() {
  describe('when there are 6 pages', function() {
    it('should return correct model for 1 of 6', function() {
      expect(getPaginationModel({ currentPage: 1, totalPages: 6 }))
        .toEqualPagination(['*1(<<)', '*1(<)', '*1', '2', '3', '4', '5', '6', '2(>)', '6(>>)']);
    });

    it('should return correct model for 2 of 6', function() {
      expect(getPaginationModel({ currentPage: 2, totalPages: 6 }))
        .toEqualPagination(['1(<<)', '1(<)', '1', '*2', '3', '4', '5', '6', '3(>)', '6(>>)']);
    });

    it('should return correct model for 3 of 6', function() {
      expect(getPaginationModel({ currentPage: 3, totalPages: 6 }))
        .toEqualPagination(['1(<<)', '2(<)', '1', '2', '*3', '4', '5', '6', '4(>)', '6(>>)']);
    });

    it('should return correct model for 4 of 6', function() {
      expect(getPaginationModel({ currentPage: 4, totalPages: 6 }))
        .toEqualPagination(['1(<<)', '3(<)', '1', '2', '3', '*4', '5', '6', '5(>)', '6(>>)']);
    });

    it('should return correct model for 5 of 6', function() {
      expect(getPaginationModel({ currentPage: 5, totalPages: 6 }))
        .toEqualPagination(['1(<<)', '4(<)', '1', '2', '3', '4', '*5', '6', '6(>)', '6(>>)']);
    });

    it('should return correct model for 6 of 6', function() {
      expect(getPaginationModel({ currentPage: 6, totalPages: 6 }))
        .toEqualPagination(['1(<<)', '5(<)', '1', '2', '3', '4', '5', '*6', '*6(>)', '*6(>>)']);
    });
  });
});
