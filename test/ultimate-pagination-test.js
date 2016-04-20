import {getPaginationModel} from '../src/ultimate-pagination';

describe('getPaginationModel', function() {
  it('should return [1, 2, 3, 4, 5, "...", 10] for 1 of 10', function(){
    expect(getPaginationModel(1, 10)).toEqual([1, 2, 3, 4, 5, '...', 10]);
  });

  it('should return [1, 2, 3, 4, 5, "...", 10] for 2 of 10', function(){
    expect(getPaginationModel(2, 10)).toEqual([1, 2, 3, 4, 5, '...', 10]);
  });

  it('should return [1, 2, 3, 4, 5, "...", 10] for 3 of 10', function(){
    expect(getPaginationModel(3, 10)).toEqual([1, 2, 3, 4, 5, '...', 10]);
  });

  it('should return [1, 2, 3, 4, 5, "...", 10] for 4 of 10', function(){
    expect(getPaginationModel(4, 10)).toEqual([1, 2, 3, 4, 5, '...', 10]);
  });

  it('should return [1, "...", 4, 5, 6, "...", 10] for 5 of 10', function(){
    expect(getPaginationModel(5, 10)).toEqual([1, '...', 4, 5, 6, '...', 10]);
  });

  it('should return [1, "...", 5, 6, 7, "...", 10] for 6 of 10', function(){
    expect(getPaginationModel(6, 10)).toEqual([1, '...', 5, 6, 7, '...', 10]);
  });

  it('should return [1, "...", 6, 7, 8, 9, 10] for 7 of 10', function(){
    expect(getPaginationModel(7, 10)).toEqual([1, '...', 6, 7, 8, 9, 10]);
  });

  it('should return [1, "...", 6, 7, 8, 9, 10] for 8 of 10', function(){
    expect(getPaginationModel(8, 10)).toEqual([1, '...', 6, 7, 8, 9, 10]);
  });

  it('should return [1, "...", 6, 7, 8, 9, 10] for 9 of 10', function(){
    expect(getPaginationModel(9, 10)).toEqual([1, '...', 6, 7, 8, 9, 10]);
  });

  it('should return [1, "...", 6, 7, 8, 9, 10] for 10 of 10', function(){
    expect(getPaginationModel(10, 10)).toEqual([1, '...', 6, 7, 8, 9, 10]);
  });
});
