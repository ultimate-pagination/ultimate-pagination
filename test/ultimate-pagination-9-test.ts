import './test-helpers';
import {getPaginationModel} from '../src/ultimate-pagination';

describe('getPaginationModel', function() {
  describe('when there are 9 pages', function() {
    it('should return correct model for 1 of 9', function(){
      expect(getPaginationModel({currentPage: 1, totalPages: 9}))
        .toEqualPagination(['*1(<<)', '*1(<)', '*1', '2', '3', '4', '5', '6(...>)', '9', '2(>)', '9(>>)']);
    });

    it('should return correct model for 2 of 9', function(){
      expect(getPaginationModel({currentPage: 2, totalPages: 9}))
        .toEqualPagination(['1(<<)', '1(<)', '1', '*2', '3', '4', '5', '6(...>)', '9', '3(>)', '9(>>)']);
    });

    it('should return correct model for 3 of 9', function(){
      expect(getPaginationModel({currentPage: 3, totalPages: 9}))
        .toEqualPagination(['1(<<)', '2(<)', '1', '2', '*3', '4', '5', '6(...>)', '9', '4(>)', '9(>>)']);
    });

    it('should return correct model for 4 of 9', function(){
      expect(getPaginationModel({currentPage: 4, totalPages: 9}))
        .toEqualPagination(['1(<<)', '3(<)', '1', '2', '3', '*4', '5', '6(...>)', '9', '5(>)', '9(>>)']);
    });

    it('should return correct model for 5 of 9', function(){
      expect(getPaginationModel({currentPage: 5, totalPages: 9}))
        .toEqualPagination(['1(<<)', '4(<)', '1', '3(<...)', '4', '*5', '6', '7(...>)', '9', '6(>)', '9(>>)']);
    });

    it('should return correct model for 6 of 9', function(){
      expect(getPaginationModel({currentPage: 6, totalPages: 9}))
        .toEqualPagination(['1(<<)', '5(<)', '1', '4(<...)', '5', '*6', '7', '8', '9', '7(>)', '9(>>)']);
    });

    it('should return correct model for 7 of 9', function(){
      expect(getPaginationModel({currentPage: 7, totalPages: 9}))
        .toEqualPagination(['1(<<)', '6(<)', '1', '4(<...)', '5', '6', '*7', '8', '9', '8(>)', '9(>>)']);
    });

    it('should return correct model for 8 of 9', function(){
      expect(getPaginationModel({currentPage: 8, totalPages: 9}))
        .toEqualPagination(['1(<<)', '7(<)', '1', '4(<...)', '5', '6', '7', '*8', '9', '9(>)', '9(>>)']);
    });

    it('should return correct model for 9 of 9', function(){
      expect(getPaginationModel({currentPage: 9, totalPages: 9}))
        .toEqualPagination(['1(<<)', '8(<)', '1', '4(<...)', '5', '6', '7', '8', '*9', '*9(>)', '*9(>>)']);
    });
  });
});
