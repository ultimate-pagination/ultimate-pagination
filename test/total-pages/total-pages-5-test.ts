import '../test-helpers';
import {getPaginationModel} from '../../src/ultimate-pagination';

describe('getPaginationModel', function() {
  describe('when there are 5 pages', function() {
    it('should return correct model for 1 of 5', function() {
      expect(getPaginationModel({ currentPage: 1, totalPages: 5 }))
        .toEqualPagination(['*1(<<)', '*1(<)', '*1', '2', '3', '4', '5', '2(>)', '5(>>)']);
    });

    it('should return correct model for 2 of 5', function() {
      expect(getPaginationModel({ currentPage: 2, totalPages: 5 }))
        .toEqualPagination(['1(<<)', '1(<)', '1', '*2', '3', '4', '5', '3(>)', '5(>>)']);
    });

    it('should return correct model for 3 of 5', function() {
      expect(getPaginationModel({ currentPage: 3, totalPages: 5 }))
        .toEqualPagination(['1(<<)', '2(<)', '1', '2', '*3', '4', '5', '4(>)', '5(>>)']);
    });

    it('should return correct model for 4 of 5', function() {
      expect(getPaginationModel({ currentPage: 4, totalPages: 5 }))
        .toEqualPagination(['1(<<)', '3(<)', '1', '2', '3', '*4', '5', '5(>)', '5(>>)']);
    });

    it('should return correct model for 5 of 5', function() {
      expect(getPaginationModel({ currentPage: 5, totalPages: 5 }))
        .toEqualPagination(['1(<<)', '4(<)', '1', '2', '3', '4', '*5', '*5(>)', '*5(>>)']);
    });
  });
});
