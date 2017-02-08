import {getPaginationModel, ITEM_TYPES, ITEM_KEYS} from '../src/ultimate-pagination';

describe('getPaginationModel', function() {
  describe('when there are 9 pages', function() {
    it('should return ["<<", "<", 1, 2, 3, 4, 5, "...", 9, ">", ">>"] for 1 of 9', function(){
      expect(getPaginationModel({currentPage: 1, totalPages: 9})).toEqual([
        {type: ITEM_TYPES.FIRST_PAGE_LINK, key: ITEM_KEYS.FIRST_PAGE_LINK, value: 1, isActive: true},
        {type: ITEM_TYPES.PREVIOUS_PAGE_LINK, key: ITEM_KEYS.PREVIOUS_PAGE_LINK, value: 1, isActive: true},
        {type: ITEM_TYPES.PAGE, key: 1, value: 1, isActive: true},
        {type: ITEM_TYPES.PAGE, key: 2, value: 2, isActive: false},
        {type: ITEM_TYPES.PAGE, key: 3, value: 3, isActive: false},
        {type: ITEM_TYPES.PAGE, key: 4, value: 4, isActive: false},
        {type: ITEM_TYPES.PAGE, key: 5, value: 5, isActive: false},
        {type: ITEM_TYPES.ELLIPSIS, key: ITEM_KEYS.SECOND_ELLIPSIS, value: 6, isActive: false},
        {type: ITEM_TYPES.PAGE, key: 9, value: 9, isActive: false},
        {type: ITEM_TYPES.NEXT_PAGE_LINK, key: ITEM_KEYS.NEXT_PAGE_LINK, value: 2, isActive: false},
        {type: ITEM_TYPES.LAST_PAGE_LINK, key: ITEM_KEYS.LAST_PAGE_LINK, value: 9, isActive: false}
      ]);
    });

    it('should return ["<<", "<", 1, 2, 3, 4, 5, "...", 9, ">", ">>"] for 2 of 9', function(){
      expect(getPaginationModel({currentPage: 2, totalPages: 9})).toEqual([
        {type: ITEM_TYPES.FIRST_PAGE_LINK, key: ITEM_KEYS.FIRST_PAGE_LINK, value: 1, isActive: false},
        {type: ITEM_TYPES.PREVIOUS_PAGE_LINK, key: ITEM_KEYS.PREVIOUS_PAGE_LINK, value: 1, isActive: false},
        {type: ITEM_TYPES.PAGE, key: 1, value: 1, isActive: false},
        {type: ITEM_TYPES.PAGE, key: 2, value: 2, isActive: true},
        {type: ITEM_TYPES.PAGE, key: 3, value: 3, isActive: false},
        {type: ITEM_TYPES.PAGE, key: 4, value: 4, isActive: false},
        {type: ITEM_TYPES.PAGE, key: 5, value: 5, isActive: false},
        {type: ITEM_TYPES.ELLIPSIS, key: ITEM_KEYS.SECOND_ELLIPSIS, value: 6, isActive: false},
        {type: ITEM_TYPES.PAGE, key: 9, value: 9, isActive: false},
        {type: ITEM_TYPES.NEXT_PAGE_LINK, key: ITEM_KEYS.NEXT_PAGE_LINK, value: 3, isActive: false},
        {type: ITEM_TYPES.LAST_PAGE_LINK, key: ITEM_KEYS.LAST_PAGE_LINK, value: 9, isActive: false}
      ]);
    });

    it('should return ["<<", "<", 1, 2, 3, 4, 5, "...", 9, ">", ">>"] for 3 of 9', function(){
      expect(getPaginationModel({currentPage: 3, totalPages: 9})).toEqual([
        {type: ITEM_TYPES.FIRST_PAGE_LINK, key: ITEM_KEYS.FIRST_PAGE_LINK, value: 1, isActive: false},
        {type: ITEM_TYPES.PREVIOUS_PAGE_LINK, key: ITEM_KEYS.PREVIOUS_PAGE_LINK, value: 2, isActive: false},
        {type: ITEM_TYPES.PAGE, key: 1, value: 1, isActive: false},
        {type: ITEM_TYPES.PAGE, key: 2, value: 2, isActive: false},
        {type: ITEM_TYPES.PAGE, key: 3, value: 3, isActive: true},
        {type: ITEM_TYPES.PAGE, key: 4, value: 4, isActive: false},
        {type: ITEM_TYPES.PAGE, key: 5, value: 5, isActive: false},
        {type: ITEM_TYPES.ELLIPSIS, key: ITEM_KEYS.SECOND_ELLIPSIS, value: 6, isActive: false},
        {type: ITEM_TYPES.PAGE, key: 9, value: 9, isActive: false},
        {type: ITEM_TYPES.NEXT_PAGE_LINK, key: ITEM_KEYS.NEXT_PAGE_LINK, value: 4, isActive: false},
        {type: ITEM_TYPES.LAST_PAGE_LINK, key: ITEM_KEYS.LAST_PAGE_LINK, value: 9, isActive: false}
      ]);
    });

    it('should return ["<<", "<", 1, 2, 3, 4, 5, "...", 9, ">", ">>"] for 4 of 9', function(){
      expect(getPaginationModel({currentPage: 4, totalPages: 9})).toEqual([
        {type: ITEM_TYPES.FIRST_PAGE_LINK, key: ITEM_KEYS.FIRST_PAGE_LINK, value: 1, isActive: false},
        {type: ITEM_TYPES.PREVIOUS_PAGE_LINK, key: ITEM_KEYS.PREVIOUS_PAGE_LINK, value: 3, isActive: false},
        {type: ITEM_TYPES.PAGE, key: 1, value: 1, isActive: false},
        {type: ITEM_TYPES.PAGE, key: 2, value: 2, isActive: false},
        {type: ITEM_TYPES.PAGE, key: 3, value: 3, isActive: false},
        {type: ITEM_TYPES.PAGE, key: 4, value: 4, isActive: true},
        {type: ITEM_TYPES.PAGE, key: 5, value: 5, isActive: false},
        {type: ITEM_TYPES.ELLIPSIS, key: ITEM_KEYS.SECOND_ELLIPSIS, value: 6, isActive: false},
        {type: ITEM_TYPES.PAGE, key: 9, value: 9, isActive: false},
        {type: ITEM_TYPES.NEXT_PAGE_LINK, key: ITEM_KEYS.NEXT_PAGE_LINK, value: 5, isActive: false},
        {type: ITEM_TYPES.LAST_PAGE_LINK, key: ITEM_KEYS.LAST_PAGE_LINK, value: 9, isActive: false}
      ]);
    });

    it('should return ["<<", "<", 1, "...", 4, 5, 6, "...", 9, ">", ">>"] for 5 of 9', function(){
      expect(getPaginationModel({currentPage: 5, totalPages: 9})).toEqual([
        {type: ITEM_TYPES.FIRST_PAGE_LINK, key: ITEM_KEYS.FIRST_PAGE_LINK, value: 1, isActive: false},
        {type: ITEM_TYPES.PREVIOUS_PAGE_LINK, key: ITEM_KEYS.PREVIOUS_PAGE_LINK, value: 4, isActive: false},
        {type: ITEM_TYPES.PAGE, key: 1, value: 1, isActive: false},
        {type: ITEM_TYPES.ELLIPSIS, key: ITEM_KEYS.FIRST_ELLIPSIS, value: 3, isActive: false},
        {type: ITEM_TYPES.PAGE, key: 4, value: 4, isActive: false},
        {type: ITEM_TYPES.PAGE, key: 5, value: 5, isActive: true},
        {type: ITEM_TYPES.PAGE, key: 6, value: 6, isActive: false},
        {type: ITEM_TYPES.ELLIPSIS, key: ITEM_KEYS.SECOND_ELLIPSIS, value: 7, isActive: false},
        {type: ITEM_TYPES.PAGE, key: 9, value: 9, isActive: false},
        {type: ITEM_TYPES.NEXT_PAGE_LINK, key: ITEM_KEYS.NEXT_PAGE_LINK, value: 6, isActive: false},
        {type: ITEM_TYPES.LAST_PAGE_LINK, key: ITEM_KEYS.LAST_PAGE_LINK, value: 9, isActive: false}
      ]);
    });

    it('should return ["<<", "<", 1, "...", 5, 6, 7, 8, 9, ">", ">>"] for 6 of 9', function(){
      expect(getPaginationModel({currentPage: 6, totalPages: 9})).toEqual([
        {type: ITEM_TYPES.FIRST_PAGE_LINK, key: ITEM_KEYS.FIRST_PAGE_LINK, value: 1, isActive: false},
        {type: ITEM_TYPES.PREVIOUS_PAGE_LINK, key: ITEM_KEYS.PREVIOUS_PAGE_LINK, value: 5, isActive: false},
        {type: ITEM_TYPES.PAGE, key: 1, value: 1, isActive: false},
        {type: ITEM_TYPES.ELLIPSIS, key: ITEM_KEYS.FIRST_ELLIPSIS, value: 4, isActive: false},
        {type: ITEM_TYPES.PAGE, key: 5, value: 5, isActive: false},
        {type: ITEM_TYPES.PAGE, key: 6, value: 6, isActive: true},
        {type: ITEM_TYPES.PAGE, key: 7, value: 7, isActive: false},
        {type: ITEM_TYPES.PAGE, key: 8, value: 8, isActive: false },
        {type: ITEM_TYPES.PAGE, key: 9, value: 9, isActive: false},
        {type: ITEM_TYPES.NEXT_PAGE_LINK, key: ITEM_KEYS.NEXT_PAGE_LINK, value: 7, isActive: false},
        {type: ITEM_TYPES.LAST_PAGE_LINK, key: ITEM_KEYS.LAST_PAGE_LINK, value: 9, isActive: false}
      ]);
    });

    it('should return ["<<", "<", 1, "...", 5, 6, 7, 8, 9, ">", ">>"] for 7 of 9', function(){
      expect(getPaginationModel({currentPage: 7, totalPages: 9})).toEqual([
        {type: ITEM_TYPES.FIRST_PAGE_LINK, key: ITEM_KEYS.FIRST_PAGE_LINK, value: 1, isActive: false},
        {type: ITEM_TYPES.PREVIOUS_PAGE_LINK, key: ITEM_KEYS.PREVIOUS_PAGE_LINK, value: 6, isActive: false},
        {type: ITEM_TYPES.PAGE, key: 1, value: 1, isActive: false},
        {type: ITEM_TYPES.ELLIPSIS, key: ITEM_KEYS.FIRST_ELLIPSIS, value: 4, isActive: false},
        {type: ITEM_TYPES.PAGE, key: 5, value: 5, isActive: false},
        {type: ITEM_TYPES.PAGE, key: 6, value: 6, isActive: false},
        {type: ITEM_TYPES.PAGE, key: 7, value: 7, isActive: true},
        {type: ITEM_TYPES.PAGE, key: 8, value: 8, isActive: false},
        {type: ITEM_TYPES.PAGE, key: 9, value: 9, isActive: false},
        {type: ITEM_TYPES.NEXT_PAGE_LINK, key: ITEM_KEYS.NEXT_PAGE_LINK, value: 8, isActive: false},
        {type: ITEM_TYPES.LAST_PAGE_LINK, key: ITEM_KEYS.LAST_PAGE_LINK, value: 9, isActive: false}
      ]);
    });

    it('should return ["<<", "<", 1, "...", 5, 6, 7, 8, 9, ">", ">>"] for 8 of 9', function(){
      expect(getPaginationModel({currentPage: 8, totalPages: 9})).toEqual([
        {type: ITEM_TYPES.FIRST_PAGE_LINK, key: ITEM_KEYS.FIRST_PAGE_LINK, value: 1, isActive: false},
        {type: ITEM_TYPES.PREVIOUS_PAGE_LINK, key: ITEM_KEYS.PREVIOUS_PAGE_LINK, value: 7, isActive: false},
        {type: ITEM_TYPES.PAGE, key: 1, value: 1, isActive: false},
        {type: ITEM_TYPES.ELLIPSIS, key: ITEM_KEYS.FIRST_ELLIPSIS, value: 4, isActive: false},
        {type: ITEM_TYPES.PAGE, key: 5, value: 5, isActive: false},
        {type: ITEM_TYPES.PAGE, key: 6, value: 6, isActive: false},
        {type: ITEM_TYPES.PAGE, key: 7, value: 7, isActive: false},
        {type: ITEM_TYPES.PAGE, key: 8, value: 8, isActive: true},
        {type: ITEM_TYPES.PAGE, key: 9, value: 9, isActive: false},
        {type: ITEM_TYPES.NEXT_PAGE_LINK, key: ITEM_KEYS.NEXT_PAGE_LINK, value: 9, isActive: false},
        {type: ITEM_TYPES.LAST_PAGE_LINK, key: ITEM_KEYS.LAST_PAGE_LINK, value: 9, isActive: false}
      ]);
    });

    it('should return ["<<", "<", 1, "...", 5, 6, 7, 8, 9, ">", ">>"] for 9 of 9', function(){
      expect(getPaginationModel({currentPage: 9, totalPages: 9})).toEqual([
        {type: ITEM_TYPES.FIRST_PAGE_LINK, key: ITEM_KEYS.FIRST_PAGE_LINK, value: 1, isActive: false},
        {type: ITEM_TYPES.PREVIOUS_PAGE_LINK, key: ITEM_KEYS.PREVIOUS_PAGE_LINK, value: 8, isActive: false},
        {type: ITEM_TYPES.PAGE, key: 1, value: 1, isActive: false},
        {type: ITEM_TYPES.ELLIPSIS, key: ITEM_KEYS.FIRST_ELLIPSIS, value: 4, isActive: false},
        {type: ITEM_TYPES.PAGE, key: 5, value: 5, isActive: false},
        {type: ITEM_TYPES.PAGE, key: 6, value: 6, isActive: false},
        {type: ITEM_TYPES.PAGE, key: 7, value: 7, isActive: false},
        {type: ITEM_TYPES.PAGE, key: 8, value: 8, isActive: false},
        {type: ITEM_TYPES.PAGE, key: 9, value: 9, isActive: true},
        {type: ITEM_TYPES.NEXT_PAGE_LINK, key: ITEM_KEYS.NEXT_PAGE_LINK, value: 9, isActive: true },
        {type: ITEM_TYPES.LAST_PAGE_LINK, key: ITEM_KEYS.LAST_PAGE_LINK, value: 9, isActive: true }
      ]);
    });
  });
});
