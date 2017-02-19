import './test-helpers';
import * as ultimatePagination from '../src/ultimate-pagination';

// Cast getPaginationModel to general Function to not have TypeScript errors
// when passing parameters with incorrect data type
const getPaginationModel = ultimatePagination.getPaginationModel as Function;

describe('getPaginationModel', function() {
  it('should throw and exception if options aren\'t passed', function() {
    expect(() => getPaginationModel())
      .toThrowError('getPaginationModel(): options object should be a passed');
  });

  describe('for total pages', function() {
    it('should throw an exception if value isn\'t passed', function() {
      expect(() => getPaginationModel({ currentPage: 5 }))
        .toThrowError('getPaginationModel(): totalPages should be a number');
    });

    it('should throw an exception if value can\'t be converted to a number', function() {
      expect(() => getPaginationModel({ currentPage: 5, totalPages: 'ten' }))
        .toThrowError('getPaginationModel(): totalPages should be a number');
    });

    it('shouldn\'t throw an exception if value can be converted to a number', function() {
      expect(() => getPaginationModel({ currentPage: 5, totalPages: '10' }))
        .not.toThrowError();
    });

    it('should throw an exception if value is negative', function() {
      expect(() => getPaginationModel({ currentPage: -2, totalPages: -1 }))
        .toThrowError('getPaginationModel(): totalPages shouldn\'t be a negative number');
    });
  });

  describe('for current page', function() {
    it('should throw an exception if value isn\'t passed', function() {
      expect(() => getPaginationModel({ totalPages: 10 }))
        .toThrowError('getPaginationModel(): currentPage should be a number');
    });

    it('should throw an exception if value can\'t be converted to a number', function() {
      expect(() => getPaginationModel({ currentPage: 'five', totalPages: 10 }))
        .toThrowError('getPaginationModel(): currentPage should be a number');
    });

    it('shouldn\'t throw an exception if value can be converted to a number', function() {
      expect(() => getPaginationModel({ currentPage: '5', totalPages: 10 }))
        .not.toThrowError();
    });

    it('should throw an exception if value is negative', function() {
      expect(() => getPaginationModel({ currentPage: -1, totalPages: 10 }))
        .toThrowError('getPaginationModel(): currentPage shouldn\'t be a negative number');
    });

    it('should throw an exception if value is bigger than total pages', function() {
      expect(() => getPaginationModel({ currentPage: 11, totalPages: 10 }))
        .toThrowError('getPaginationModel(): currentPage shouldn\'t be greater than totalPages');
    });
  });

  describe('for boundary pages range', function() {
    it('should throw an exception if value can\'t be converted to a number', function() {
      expect(() => getPaginationModel({ currentPage: 5, totalPages: 10, boundaryPagesRange: 'two' }))
        .toThrowError('getPaginationModel(): boundaryPagesRange should be a number');
    });

    it('should throw an exception if value is negative', function() {
      expect(() => getPaginationModel({ currentPage: 5, totalPages: 10, boundaryPagesRange: -1 }))
        .toThrowError('getPaginationModel(): boundaryPagesRange shouldn\'t be a negative number');
    });
  });

  describe('for sibling pages range', function() {
    it('should throw an exception if value can\'t be converted to a number', function() {
      expect(() => getPaginationModel({ currentPage: 5, totalPages: 10, siblingPagesRange: 'two' }))
        .toThrowError('getPaginationModel(): siblingPagesRange should be a number');
    });

    it('should throw an exception if value is negative', function() {
      expect(() => getPaginationModel({ currentPage: 5, totalPages: 10, siblingPagesRange: -1 }))
        .toThrowError('getPaginationModel(): siblingPagesRange shouldn\'t be a negative number');
    });
  });
});
