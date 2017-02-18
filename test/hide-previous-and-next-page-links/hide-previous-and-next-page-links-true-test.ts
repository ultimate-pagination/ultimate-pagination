import '../test-helpers';
import {getPaginationModel} from '../../src/ultimate-pagination';

describe('getPaginationModel', function() {
  describe('when there are 10 pages', function() {
    describe('and hide previous and next page links is "true"', function() {
      it('should return correct model for 1 of 10', function(){
        expect(getPaginationModel({currentPage: 1, totalPages: 10, hidePreviousAndNextPageLinks: true}))
          .toEqualPagination(['*1(<<)', '*1', '2', '3', '4', '5', '6(...>)', '10', '10(>>)']);
      });

      it('should return correct model for 2 of 10', function(){
        expect(getPaginationModel({currentPage: 2, totalPages: 10, hidePreviousAndNextPageLinks: true}))
          .toEqualPagination(['1(<<)', '1', '*2', '3', '4', '5', '6(...>)', '10', '10(>>)']);
      });

      it('should return correct model for 3 of 10', function(){
        expect(getPaginationModel({currentPage: 3, totalPages: 10, hidePreviousAndNextPageLinks: true}))
          .toEqualPagination(['1(<<)', '1', '2', '*3', '4', '5', '6(...>)', '10', '10(>>)']);
      });

      it('should return correct model for 4 of 10', function(){
        expect(getPaginationModel({currentPage: 4, totalPages: 10, hidePreviousAndNextPageLinks: true}))
          .toEqualPagination(['1(<<)', '1', '2', '3', '*4', '5', '6(...>)', '10', '10(>>)']);
      });

      it('should return correct model for 5 of 10', function(){
        expect(getPaginationModel({currentPage: 5, totalPages: 10, hidePreviousAndNextPageLinks: true}))
          .toEqualPagination(['1(<<)', '1', '3(<...)', '4', '*5', '6', '7(...>)', '10', '10(>>)']);
      });

      it('should return correct model for 6 of 10', function(){
        expect(getPaginationModel({currentPage: 6, totalPages: 10, hidePreviousAndNextPageLinks: true}))
          .toEqualPagination(['1(<<)', '1', '4(<...)', '5', '*6', '7', '8(...>)', '10', '10(>>)']);
      });

      it('should return correct model for 7 of 10', function(){
        expect(getPaginationModel({currentPage: 7, totalPages: 10, hidePreviousAndNextPageLinks: true}))
          .toEqualPagination(['1(<<)', '1', '5(<...)', '6', '*7', '8', '9', '10', '10(>>)']);
      });

      it('should return correct model for 8 of 10', function(){
        expect(getPaginationModel({currentPage: 8, totalPages: 10, hidePreviousAndNextPageLinks: true}))
          .toEqualPagination(['1(<<)', '1', '5(<...)', '6', '7', '*8', '9', '10', '10(>>)']);
      });

      it('should return correct model for 9 of 10', function(){
        expect(getPaginationModel({currentPage: 9, totalPages: 10, hidePreviousAndNextPageLinks: true}))
          .toEqualPagination(['1(<<)', '1', '5(<...)', '6', '7', '8', '*9', '10', '10(>>)']);
      });

      it('should return correct model for 10 of 10', function(){
        expect(getPaginationModel({currentPage: 10, totalPages: 10, hidePreviousAndNextPageLinks: true}))
          .toEqualPagination(['1(<<)', '1', '5(<...)', '6', '7', '8', '9', '*10', '*10(>>)']);
      });
    });
  });
});
