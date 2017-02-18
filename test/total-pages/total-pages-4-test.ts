import '../test-helpers';
import {getPaginationModel} from '../../src/ultimate-pagination';

describe('getPaginationModel', function() {
  describe('when there are 4 pages', function() {
    it('should return correct model for 1 of 4', function() {
      expect(getPaginationModel({ currentPage: 1, totalPages: 4 }))
        .toEqualPagination(['*1(<<)', '*1(<)', '*1', '2', '3', '4', '2(>)', '4(>>)']);
    });

    it('should return correct model for 2 of 4', function() {
      expect(getPaginationModel({ currentPage: 2, totalPages: 4 }))
        .toEqualPagination(['1(<<)', '1(<)', '1', '*2', '3', '4', '3(>)', '4(>>)']);
    });

    it('should return correct model for 3 of 4', function() {
      expect(getPaginationModel({ currentPage: 3, totalPages: 4 }))
        .toEqualPagination(['1(<<)', '2(<)', '1', '2', '*3', '4', '4(>)', '4(>>)']);
    });

    it('should return correct model for 4 of 4', function() {
      expect(getPaginationModel({ currentPage: 4, totalPages: 4 }))
        .toEqualPagination(['1(<<)', '3(<)', '1', '2', '3', '*4', '*4(>)', '*4(>>)']);
    });
  });
});
