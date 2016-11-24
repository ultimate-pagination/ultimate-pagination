import {getPaginationModel, ITEM_TYPES, ITEM_KEYS} from '../src/ultimate-pagination';

describe('getPaginationModel', function() {
  describe('when there are 7 pages', function() {
    it('should return ["<<", "<", 1, 2, 3, 4, 5, 6, 7, ">", ">>"] for 1 of 7', function() {
      expect(getPaginationModel({ currentPage: 1, totalPages: 7 })).toEqual([
        { type: ITEM_TYPES.FIRST_PAGE_LINK, key: ITEM_KEYS.FIRST_PAGE_LINK, value: 1, isActive: true },
        { type: ITEM_TYPES.PREVIOUS_PAGE_LINK, key: ITEM_KEYS.PREVIOUS_PAGE_LINK, value: 1, isActive: true },
        { type: ITEM_TYPES.PAGE, key: 1, value: 1, isActive: true },
        { type: ITEM_TYPES.PAGE, key: 2, value: 2, isActive: false },
        { type: ITEM_TYPES.PAGE, key: 3, value: 3, isActive: false },
        { type: ITEM_TYPES.PAGE, key: 4, value: 4, isActive: false },
        { type: ITEM_TYPES.PAGE, key: 5, value: 5, isActive: false },
        { type: ITEM_TYPES.PAGE, key: 6, value: 6, isActive: false },
        { type: ITEM_TYPES.PAGE, key: 7, value: 7, isActive: false },
        { type: ITEM_TYPES.NEXT_PAGE_LINK, key: ITEM_KEYS.NEXT_PAGE_LINK, value: 2, isActive: false },
        { type: ITEM_TYPES.LAST_PAGE_LINK, key: ITEM_KEYS.LAST_PAGE_LINK, value: 7, isActive: false }
      ]);
    });

    it('should return ["<<", "<", 1, 2, 3, 4, 5, 6, 7, ">", ">>"] for 2 of 7', function() {
      expect(getPaginationModel({ currentPage: 2, totalPages: 7 })).toEqual([
        { type: ITEM_TYPES.FIRST_PAGE_LINK, key: ITEM_KEYS.FIRST_PAGE_LINK, value: 1, isActive: false },
        { type: ITEM_TYPES.PREVIOUS_PAGE_LINK, key: ITEM_KEYS.PREVIOUS_PAGE_LINK, value: 1, isActive: false },
        { type: ITEM_TYPES.PAGE, key: 1, value: 1, isActive: false },
        { type: ITEM_TYPES.PAGE, key: 2, value: 2, isActive: true },
        { type: ITEM_TYPES.PAGE, key: 3, value: 3, isActive: false },
        { type: ITEM_TYPES.PAGE, key: 4, value: 4, isActive: false },
        { type: ITEM_TYPES.PAGE, key: 5, value: 5, isActive: false },
        { type: ITEM_TYPES.PAGE, key: 6, value: 6, isActive: false },
        { type: ITEM_TYPES.PAGE, key: 7, value: 7, isActive: false },
        { type: ITEM_TYPES.NEXT_PAGE_LINK, key: ITEM_KEYS.NEXT_PAGE_LINK, value: 3, isActive: false },
        { type: ITEM_TYPES.LAST_PAGE_LINK, key: ITEM_KEYS.LAST_PAGE_LINK, value: 7, isActive: false }
      ]);
    });

    it('should return ["<<", "<", 1, 2, 3, 4, 5, 6, 7, ">", ">>"] for 3 of 7', function() {
      expect(getPaginationModel({ currentPage: 3, totalPages: 7 })).toEqual([
        { type: ITEM_TYPES.FIRST_PAGE_LINK, key: ITEM_KEYS.FIRST_PAGE_LINK, value: 1, isActive: false },
        { type: ITEM_TYPES.PREVIOUS_PAGE_LINK, key: ITEM_KEYS.PREVIOUS_PAGE_LINK, value: 2, isActive: false },
        { type: ITEM_TYPES.PAGE, key: 1, value: 1, isActive: false },
        { type: ITEM_TYPES.PAGE, key: 2, value: 2, isActive: false },
        { type: ITEM_TYPES.PAGE, key: 3, value: 3, isActive: true },
        { type: ITEM_TYPES.PAGE, key: 4, value: 4, isActive: false },
        { type: ITEM_TYPES.PAGE, key: 5, value: 5, isActive: false },
        { type: ITEM_TYPES.PAGE, key: 6, value: 6, isActive: false },
        { type: ITEM_TYPES.PAGE, key: 7, value: 7, isActive: false },
        { type: ITEM_TYPES.NEXT_PAGE_LINK, key: ITEM_KEYS.NEXT_PAGE_LINK, value: 4, isActive: false },
        { type: ITEM_TYPES.LAST_PAGE_LINK, key: ITEM_KEYS.LAST_PAGE_LINK, value: 7, isActive: false }
      ]);
    });

    it('should return ["<<", "<", 1, 2, 3, 4, 5, 6, 7, ">", ">>"] for 4 of 7', function() {
      expect(getPaginationModel({ currentPage: 4, totalPages: 7 })).toEqual([
        { type: ITEM_TYPES.FIRST_PAGE_LINK, key: ITEM_KEYS.FIRST_PAGE_LINK, value: 1, isActive: false },
        { type: ITEM_TYPES.PREVIOUS_PAGE_LINK, key: ITEM_KEYS.PREVIOUS_PAGE_LINK, value: 3, isActive: false },
        { type: ITEM_TYPES.PAGE, key: 1, value: 1, isActive: false },
        { type: ITEM_TYPES.PAGE, key: 2, value: 2, isActive: false },
        { type: ITEM_TYPES.PAGE, key: 3, value: 3, isActive: false },
        { type: ITEM_TYPES.PAGE, key: 4, value: 4, isActive: true },
        { type: ITEM_TYPES.PAGE, key: 5, value: 5, isActive: false },
        { type: ITEM_TYPES.PAGE, key: 6, value: 6, isActive: false },
        { type: ITEM_TYPES.PAGE, key: 7, value: 7, isActive: false },
        { type: ITEM_TYPES.NEXT_PAGE_LINK, key: ITEM_KEYS.NEXT_PAGE_LINK, value: 5, isActive: false },
        { type: ITEM_TYPES.LAST_PAGE_LINK, key: ITEM_KEYS.LAST_PAGE_LINK, value: 7, isActive: false }
      ]);
    });

    it('should return ["<<", "<", 1, 2, 3, 4, 5, 6, 7, ">", ">>"] for 5 of 7', function() {
      expect(getPaginationModel({ currentPage: 5, totalPages: 7 })).toEqual([
        { type: ITEM_TYPES.FIRST_PAGE_LINK, key: ITEM_KEYS.FIRST_PAGE_LINK, value: 1, isActive: false },
        { type: ITEM_TYPES.PREVIOUS_PAGE_LINK, key: ITEM_KEYS.PREVIOUS_PAGE_LINK, value: 4, isActive: false },
        { type: ITEM_TYPES.PAGE, key: 1, value: 1, isActive: false },
        { type: ITEM_TYPES.PAGE, key: 2, value: 2, isActive: false },
        { type: ITEM_TYPES.PAGE, key: 3, value: 3, isActive: false },
        { type: ITEM_TYPES.PAGE, key: 4, value: 4, isActive: false },
        { type: ITEM_TYPES.PAGE, key: 5, value: 5, isActive: true },
        { type: ITEM_TYPES.PAGE, key: 6, value: 6, isActive: false },
        { type: ITEM_TYPES.PAGE, key: 7, value: 7, isActive: false },
        { type: ITEM_TYPES.NEXT_PAGE_LINK, key: ITEM_KEYS.NEXT_PAGE_LINK, value: 6, isActive: false },
        { type: ITEM_TYPES.LAST_PAGE_LINK, key: ITEM_KEYS.LAST_PAGE_LINK, value: 7, isActive: false }
      ]);
    });

    it('should return ["<<", "<", 1, 2, 3, 4, 5, 6, 7, ">", ">>"] for 6 of 7', function() {
      expect(getPaginationModel({ currentPage: 6, totalPages: 7 })).toEqual([
        { type: ITEM_TYPES.FIRST_PAGE_LINK, key: ITEM_KEYS.FIRST_PAGE_LINK, value: 1, isActive: false },
        { type: ITEM_TYPES.PREVIOUS_PAGE_LINK, key: ITEM_KEYS.PREVIOUS_PAGE_LINK, value: 5, isActive: false },
        { type: ITEM_TYPES.PAGE, key: 1, value: 1, isActive: false },
        { type: ITEM_TYPES.PAGE, key: 2, value: 2, isActive: false },
        { type: ITEM_TYPES.PAGE, key: 3, value: 3, isActive: false },
        { type: ITEM_TYPES.PAGE, key: 4, value: 4, isActive: false },
        { type: ITEM_TYPES.PAGE, key: 5, value: 5, isActive: false },
        { type: ITEM_TYPES.PAGE, key: 6, value: 6, isActive: true },
        { type: ITEM_TYPES.PAGE, key: 7, value: 7, isActive: false },
        { type: ITEM_TYPES.NEXT_PAGE_LINK, key: ITEM_KEYS.NEXT_PAGE_LINK, value: 7, isActive: false },
        { type: ITEM_TYPES.LAST_PAGE_LINK, key: ITEM_KEYS.LAST_PAGE_LINK, value: 7, isActive: false }
      ]);
    });

    it('should return ["<<", "<", 1, 2, 3, 4, 5, 6, 7, ">", ">>"] for 7 of 7', function() {
      expect(getPaginationModel({ currentPage: 7, totalPages: 7 })).toEqual([
        { type: ITEM_TYPES.FIRST_PAGE_LINK, key: ITEM_KEYS.FIRST_PAGE_LINK, value: 1, isActive: false },
        { type: ITEM_TYPES.PREVIOUS_PAGE_LINK, key: ITEM_KEYS.PREVIOUS_PAGE_LINK, value: 6, isActive: false },
        { type: ITEM_TYPES.PAGE, key: 1, value: 1, isActive: false },
        { type: ITEM_TYPES.PAGE, key: 2, value: 2, isActive: false },
        { type: ITEM_TYPES.PAGE, key: 3, value: 3, isActive: false },
        { type: ITEM_TYPES.PAGE, key: 4, value: 4, isActive: false },
        { type: ITEM_TYPES.PAGE, key: 5, value: 5, isActive: false },
        { type: ITEM_TYPES.PAGE, key: 6, value: 6, isActive: false },
        { type: ITEM_TYPES.PAGE, key: 7, value: 7, isActive: true },
        { type: ITEM_TYPES.NEXT_PAGE_LINK, key: ITEM_KEYS.NEXT_PAGE_LINK, value: 7, isActive: true },
        { type: ITEM_TYPES.LAST_PAGE_LINK, key: ITEM_KEYS.LAST_PAGE_LINK, value: 7, isActive: true }
      ]);
    });
  });
});
