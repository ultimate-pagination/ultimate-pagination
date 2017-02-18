import '../test-helpers';
import {getPaginationModel} from '../../src/ultimate-pagination';

describe('getPaginationModel', function() {
  describe('when there are 7 pages', function() {
    it('should return correct model for 1 of 7', function() {
      expect(getPaginationModel({ currentPage: 1, totalPages: 7 }))
        .toEqualPagination(['*1(<<)', '*1(<)', '*1', '2', '3', '4', '5', '6', '7', '2(>)', '7(>>)']);
    });

    it('should return correct model for 2 of 7', function() {
      expect(getPaginationModel({ currentPage: 2, totalPages: 7 }))
        .toEqualPagination(['1(<<)', '1(<)', '1', '*2', '3', '4', '5', '6', '7', '3(>)', '7(>>)']);
    });

    it('should return correct model for 3 of 7', function() {
      expect(getPaginationModel({ currentPage: 3, totalPages: 7 }))
        .toEqualPagination(['1(<<)', '2(<)', '1', '2', '*3', '4', '5', '6', '7', '4(>)', '7(>>)']);
    });

    it('should return correct model for 4 of 7', function() {
      expect(getPaginationModel({ currentPage: 4, totalPages: 7 }))
        .toEqualPagination(['1(<<)', '3(<)', '1', '2', '3', '*4', '5', '6', '7', '5(>)', '7(>>)']);
    });

    it('should return correct model for 5 of 7', function() {
      expect(getPaginationModel({ currentPage: 5, totalPages: 7 }))
        .toEqualPagination(['1(<<)', '4(<)', '1', '2', '3', '4', '*5', '6', '7', '6(>)', '7(>>)']);
    });

    it('should return correct model for 6 of 7', function() {
      expect(getPaginationModel({ currentPage: 6, totalPages: 7 }))
        .toEqualPagination(['1(<<)', '5(<)', '1', '2', '3', '4', '5', '*6', '7', '7(>)', '7(>>)']);
    });

    it('should return correct model for 7 of 7', function() {
      expect(getPaginationModel({ currentPage: 7, totalPages: 7 }))
        .toEqualPagination(['1(<<)', '6(<)', '1', '2', '3', '4', '5', '6', '*7', '*7(>)', '*7(>>)']);
    });
  });
});
