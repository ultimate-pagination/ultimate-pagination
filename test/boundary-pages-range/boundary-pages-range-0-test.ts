import '../test-helpers';
import {getPaginationModel} from '../../src/ultimate-pagination';

describe('getPaginationModel', function() {
  describe('when there are 10 pages', function() {
    describe('and boundary pages range is 0', function() {
      it('should return correct model for 1 of 10', function(){
        expect(getPaginationModel({currentPage: 1, totalPages: 10, boundaryPagesRange: 0}))
          .toEqualPagination(['*1(<<)', '*1(<)', '*1', '2', '3', '4', '5(...>)', '2(>)', '10(>>)']);
      });

      it('should return correct model for 2 of 10', function(){
        expect(getPaginationModel({currentPage: 2, totalPages: 10, boundaryPagesRange: 0}))
          .toEqualPagination(['1(<<)', '1(<)', '1', '*2', '3', '4', '5(...>)', '3(>)', '10(>>)']);
      });

      it('should return correct model for 3 of 10', function(){
        expect(getPaginationModel({currentPage: 3, totalPages: 10, boundaryPagesRange: 0}))
          .toEqualPagination(['1(<<)', '2(<)', '1', '2', '*3', '4', '5(...>)', '4(>)', '10(>>)']);
      });

      it('should return correct model for 4 of 10', function(){
        expect(getPaginationModel({currentPage: 4, totalPages: 10, boundaryPagesRange: 0}))
          .toEqualPagination(['1(<<)', '3(<)', '2(<...)', '3', '*4', '5', '6(...>)', '5(>)', '10(>>)']);
      });

      it('should return correct model for 5 of 10', function(){
        expect(getPaginationModel({currentPage: 5, totalPages: 10, boundaryPagesRange: 0}))
          .toEqualPagination(['1(<<)', '4(<)', '3(<...)', '4', '*5', '6', '7(...>)', '6(>)', '10(>>)']);
      });

      it('should return correct model for 6 of 10', function(){
        expect(getPaginationModel({currentPage: 6, totalPages: 10, boundaryPagesRange: 0}))
          .toEqualPagination(['1(<<)', '5(<)', '4(<...)', '5', '*6', '7', '8(...>)', '7(>)', '10(>>)']);
      });

      it('should return correct model for 7 of 10', function(){
        expect(getPaginationModel({currentPage: 7, totalPages: 10, boundaryPagesRange: 0}))
          .toEqualPagination(['1(<<)', '6(<)', '5(<...)', '6', '*7', '8', '9(...>)', '8(>)', '10(>>)']);
      });

      it('should return correct model for 8 of 10', function(){
        expect(getPaginationModel({currentPage: 8, totalPages: 10, boundaryPagesRange: 0}))
          .toEqualPagination(['1(<<)', '7(<)', '6(<...)', '7', '*8', '9', '10', '9(>)', '10(>>)']);
      });

      it('should return correct model for 9 of 10', function(){
        expect(getPaginationModel({currentPage: 9, totalPages: 10, boundaryPagesRange: 0}))
          .toEqualPagination(['1(<<)', '8(<)', '6(<...)', '7', '8', '*9', '10', '10(>)', '10(>>)']);
      });

      it('should return correct model for 10 of 10', function(){
        expect(getPaginationModel({currentPage: 10, totalPages: 10, boundaryPagesRange: 0}))
          .toEqualPagination(['1(<<)', '9(<)', '6(<...)', '7', '8', '9', '*10', '*10(>)', '*10(>>)']);
      });
    });
  });
});
