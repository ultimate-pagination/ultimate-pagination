import './test-helpers';
import {getPaginationModel} from '../src/ultimate-pagination';

describe('getPaginationModel', function() {
  describe('when there are 8 pages', function() {
    it('should return correct model for 1 of 8', function() {
      expect(getPaginationModel({ currentPage: 1, totalPages: 8 }))
        .toEqualPagination(['*1(<<)', '*1(<)', '*1', '2', '3', '4', '5', '6(...>)', '8', '2(>)', '8(>>)']);
    });

    it('should return correct model for 2 of 8', function() {
      expect(getPaginationModel({ currentPage: 2, totalPages: 8 }))
        .toEqualPagination(['1(<<)', '1(<)', '1', '*2', '3', '4', '5', '6(...>)', '8', '3(>)', '8(>>)']);
    });

    it('should return correct model for 3 of 8', function() {
      expect(getPaginationModel({ currentPage: 3, totalPages: 8 }))
        .toEqualPagination(['1(<<)', '2(<)', '1', '2', '*3', '4', '5', '6(...>)', '8', '4(>)', '8(>>)']);
    });

    it('should return correct model for 4 of 8', function() {
      expect(getPaginationModel({ currentPage: 4, totalPages: 8 }))
        .toEqualPagination(['1(<<)', '3(<)', '1', '2', '3', '*4', '5', '6(...>)', '8', '5(>)', '8(>>)']);
    });

    it('should return correct model for 5 of 8', function() {
      expect(getPaginationModel({ currentPage: 5, totalPages: 8 }))
        .toEqualPagination(['1(<<)', '4(<)', '1', '3(<...)', '4', '*5', '6', '7', '8', '6(>)', '8(>>)']);
    });

    it('should return correct model for 6 of 8', function() {
      expect(getPaginationModel({ currentPage: 6, totalPages: 8 }))
        .toEqualPagination(['1(<<)', '5(<)', '1', '3(<...)', '4', '5', '*6', '7', '8', '7(>)', '8(>>)']);
    });

    it('should return correct model for 7 of 8', function() {
      expect(getPaginationModel({ currentPage: 7, totalPages: 8 }))
        .toEqualPagination(['1(<<)', '6(<)', '1', '3(<...)', '4', '5', '6', '*7', '8', '8(>)', '8(>>)']);
    });

    it('should return correct model for 8 of 8', function() {
      expect(getPaginationModel({ currentPage: 8, totalPages: 8 }))
        .toEqualPagination(['1(<<)', '7(<)', '1', '3(<...)', '4', '5', '6', '7', '*8', '*8(>)', '*8(>>)']);
    });
  });
});
