import {getPaginationModel, ITEM_TYPES} from '../src/ultimate-pagination';

describe('getPaginationModel', function() {
  it('should return [1, 2, 3, 4, 5, "...", 10] for 1 of 10', function(){
    expect(getPaginationModel(1, 10)).toEqual([
      {type: ITEM_TYPES.PAGE, value: 1, isActive: true},
      {type: ITEM_TYPES.PAGE, value: 2, isActive: false},
      {type: ITEM_TYPES.PAGE, value: 3, isActive: false},
      {type: ITEM_TYPES.PAGE, value: 4, isActive: false},
      {type: ITEM_TYPES.PAGE, value: 5, isActive: false},
      {type: ITEM_TYPES.ELLIPSIS, value: -2},
      {type: ITEM_TYPES.PAGE, value: 10, isActive: false}
    ]);
  });

  it('should return [1, 2, 3, 4, 5, "...", 10] for 2 of 10', function(){
    expect(getPaginationModel(2, 10)).toEqual([
      {type: ITEM_TYPES.PAGE, value: 1, isActive: false},
      {type: ITEM_TYPES.PAGE, value: 2, isActive: true},
      {type: ITEM_TYPES.PAGE, value: 3, isActive: false},
      {type: ITEM_TYPES.PAGE, value: 4, isActive: false},
      {type: ITEM_TYPES.PAGE, value: 5, isActive: false},
      {type: ITEM_TYPES.ELLIPSIS, value: -2},
      {type: ITEM_TYPES.PAGE, value: 10, isActive: false}
    ]);
  });

  it('should return [1, 2, 3, 4, 5, "...", 10] for 3 of 10', function(){
    expect(getPaginationModel(3, 10)).toEqual([
      {type: ITEM_TYPES.PAGE, value: 1, isActive: false},
      {type: ITEM_TYPES.PAGE, value: 2, isActive: false},
      {type: ITEM_TYPES.PAGE, value: 3, isActive: true},
      {type: ITEM_TYPES.PAGE, value: 4, isActive: false},
      {type: ITEM_TYPES.PAGE, value: 5, isActive: false},
      {type: ITEM_TYPES.ELLIPSIS, value: -2},
      {type: ITEM_TYPES.PAGE, value: 10, isActive: false}
    ]);
  });

  it('should return [1, 2, 3, 4, 5, "...", 10] for 4 of 10', function(){
    expect(getPaginationModel(4, 10)).toEqual([
      {type: ITEM_TYPES.PAGE, value: 1, isActive: false},
      {type: ITEM_TYPES.PAGE, value: 2, isActive: false},
      {type: ITEM_TYPES.PAGE, value: 3, isActive: false},
      {type: ITEM_TYPES.PAGE, value: 4, isActive: true},
      {type: ITEM_TYPES.PAGE, value: 5, isActive: false},
      {type: ITEM_TYPES.ELLIPSIS, value: -2},
      {type: ITEM_TYPES.PAGE, value: 10, isActive: false}
    ]);
  });

  it('should return [1, "...", 4, 5, 6, "...", 10] for 5 of 10', function(){
    expect(getPaginationModel(5, 10)).toEqual([
      {type: ITEM_TYPES.PAGE, value: 1, isActive: false},
      {type: ITEM_TYPES.ELLIPSIS, value: -1},
      {type: ITEM_TYPES.PAGE, value: 4, isActive: false},
      {type: ITEM_TYPES.PAGE, value: 5, isActive: true},
      {type: ITEM_TYPES.PAGE, value: 6, isActive: false},
      {type: ITEM_TYPES.ELLIPSIS, value: -2},
      {type: ITEM_TYPES.PAGE, value: 10, isActive: false}
    ]);
  });

  it('should return [1, "...", 5, 6, 7, "...", 10] for 6 of 10', function(){
    expect(getPaginationModel(6, 10)).toEqual([
      {type: ITEM_TYPES.PAGE, value: 1, isActive: false},
      {type: ITEM_TYPES.ELLIPSIS, value: -1},
      {type: ITEM_TYPES.PAGE, value: 5, isActive: false},
      {type: ITEM_TYPES.PAGE, value: 6, isActive: true},
      {type: ITEM_TYPES.PAGE, value: 7, isActive: false},
      {type: ITEM_TYPES.ELLIPSIS, value: -2},
      {type: ITEM_TYPES.PAGE, value: 10, isActive: false}
    ]);
  });

  it('should return [1, "...", 6, 7, 8, 9, 10] for 7 of 10', function(){
    expect(getPaginationModel(7, 10)).toEqual([
      {type: ITEM_TYPES.PAGE, value: 1, isActive: false},
      {type: ITEM_TYPES.ELLIPSIS, value: -1},
      {type: ITEM_TYPES.PAGE, value: 6, isActive: false},
      {type: ITEM_TYPES.PAGE, value: 7, isActive: true},
      {type: ITEM_TYPES.PAGE, value: 8, isActive: false},
      {type: ITEM_TYPES.PAGE, value: 9, isActive: false},
      {type: ITEM_TYPES.PAGE, value: 10, isActive: false}
    ]);
  });

  it('should return [1, "...", 6, 7, 8, 9, 10] for 8 of 10', function(){
    expect(getPaginationModel(8, 10)).toEqual([
      {type: ITEM_TYPES.PAGE, value: 1, isActive: false},
      {type: ITEM_TYPES.ELLIPSIS, value: -1},
      {type: ITEM_TYPES.PAGE, value: 6, isActive: false},
      {type: ITEM_TYPES.PAGE, value: 7, isActive: false},
      {type: ITEM_TYPES.PAGE, value: 8, isActive: true},
      {type: ITEM_TYPES.PAGE, value: 9, isActive: false},
      {type: ITEM_TYPES.PAGE, value: 10, isActive: false}
    ]);
  });

  it('should return [1, "...", 6, 7, 8, 9, 10] for 9 of 10', function(){
    expect(getPaginationModel(9, 10)).toEqual([
      {type: ITEM_TYPES.PAGE, value: 1, isActive: false},
      {type: ITEM_TYPES.ELLIPSIS, value: -1},
      {type: ITEM_TYPES.PAGE, value: 6, isActive: false},
      {type: ITEM_TYPES.PAGE, value: 7, isActive: false},
      {type: ITEM_TYPES.PAGE, value: 8, isActive: false},
      {type: ITEM_TYPES.PAGE, value: 9, isActive: true},
      {type: ITEM_TYPES.PAGE, value: 10, isActive: false}
    ]);
  });

  it('should return [1, "...", 6, 7, 8, 9, 10] for 10 of 10', function(){
    expect(getPaginationModel(10, 10)).toEqual([
      {type: ITEM_TYPES.PAGE, value: 1, isActive: false},
      {type: ITEM_TYPES.ELLIPSIS, value: -1},
      {type: ITEM_TYPES.PAGE, value: 6, isActive: false},
      {type: ITEM_TYPES.PAGE, value: 7, isActive: false},
      {type: ITEM_TYPES.PAGE, value: 8, isActive: false},
      {type: ITEM_TYPES.PAGE, value: 9, isActive: false},
      {type: ITEM_TYPES.PAGE, value: 10, isActive: true}
    ]);
  });
});
