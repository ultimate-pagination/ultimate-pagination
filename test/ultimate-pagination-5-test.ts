import {getPaginationModel, ITEM_TYPES, ITEM_KEYS} from '../src/ultimate-pagination';

describe('getPaginationModel', function() {
  describe('when there are 5 pages', function() {
    it('should return ["<<", "<", 1, 2, 3, 4, 5, ">", ">>"] for 1 of 5', function() {
      expect(getPaginationModel({ currentPage: 1, totalPages: 5 })).toEqual([
        { type: ITEM_TYPES.FIRST_PAGE_LINK, key: ITEM_KEYS.FIRST_PAGE_LINK, value: 1, isActive: true },
        { type: ITEM_TYPES.PREVIOUS_PAGE_LINK, key: ITEM_KEYS.PREVIOUS_PAGE_LINK, value: 1, isActive: true },
        { type: ITEM_TYPES.PAGE, key: 1, value: 1, isActive: true },
        { type: ITEM_TYPES.PAGE, key: 2, value: 2, isActive: false },
        { type: ITEM_TYPES.PAGE, key: 3, value: 3, isActive: false },
        { type: ITEM_TYPES.PAGE, key: 4, value: 4, isActive: false },
        { type: ITEM_TYPES.PAGE, key: 5, value: 5, isActive: false },
        { type: ITEM_TYPES.NEXT_PAGE_LINK, key: ITEM_KEYS.NEXT_PAGE_LINK, value: 2, isActive: false },
        { type: ITEM_TYPES.LAST_PAGE_LINK, key: ITEM_KEYS.LAST_PAGE_LINK, value: 5, isActive: false }
      ]);
    });

    it('should return ["<<", "<", 1, 2, 3, 4, 5, ">", ">>"] for 2 of 5', function() {
      expect(getPaginationModel({ currentPage: 2, totalPages: 5 })).toEqual([
        { type: ITEM_TYPES.FIRST_PAGE_LINK, key: ITEM_KEYS.FIRST_PAGE_LINK, value: 1, isActive: false },
        { type: ITEM_TYPES.PREVIOUS_PAGE_LINK, key: ITEM_KEYS.PREVIOUS_PAGE_LINK, value: 1, isActive: false },
        { type: ITEM_TYPES.PAGE, key: 1, value: 1, isActive: false },
        { type: ITEM_TYPES.PAGE, key: 2, value: 2, isActive: true },
        { type: ITEM_TYPES.PAGE, key: 3, value: 3, isActive: false },
        { type: ITEM_TYPES.PAGE, key: 4, value: 4, isActive: false },
        { type: ITEM_TYPES.PAGE, key: 5, value: 5, isActive: false },
        { type: ITEM_TYPES.NEXT_PAGE_LINK, key: ITEM_KEYS.NEXT_PAGE_LINK, value: 3, isActive: false },
        { type: ITEM_TYPES.LAST_PAGE_LINK, key: ITEM_KEYS.LAST_PAGE_LINK, value: 5, isActive: false }
      ]);
    });

    it('should return ["<<", "<", 1, 2, 3, 4, 5, ">", ">>"] for 3 of 5', function() {
      expect(getPaginationModel({ currentPage: 3, totalPages: 5 })).toEqual([
        { type: ITEM_TYPES.FIRST_PAGE_LINK, key: ITEM_KEYS.FIRST_PAGE_LINK, value: 1, isActive: false },
        { type: ITEM_TYPES.PREVIOUS_PAGE_LINK, key: ITEM_KEYS.PREVIOUS_PAGE_LINK, value: 2, isActive: false },
        { type: ITEM_TYPES.PAGE, key: 1, value: 1, isActive: false },
        { type: ITEM_TYPES.PAGE, key: 2, value: 2, isActive: false },
        { type: ITEM_TYPES.PAGE, key: 3, value: 3, isActive: true },
        { type: ITEM_TYPES.PAGE, key: 4, value: 4, isActive: false },
        { type: ITEM_TYPES.PAGE, key: 5, value: 5, isActive: false },
        { type: ITEM_TYPES.NEXT_PAGE_LINK, key: ITEM_KEYS.NEXT_PAGE_LINK, value: 4, isActive: false },
        { type: ITEM_TYPES.LAST_PAGE_LINK, key: ITEM_KEYS.LAST_PAGE_LINK, value: 5, isActive: false }
      ]);
    });

    it('should return ["<<", "<", 1, 2, 3, 4, 5, ">", ">>"] for 4 of 5', function() {
      expect(getPaginationModel({ currentPage: 4, totalPages: 5 })).toEqual([
        { type: ITEM_TYPES.FIRST_PAGE_LINK, key: ITEM_KEYS.FIRST_PAGE_LINK, value: 1, isActive: false },
        { type: ITEM_TYPES.PREVIOUS_PAGE_LINK, key: ITEM_KEYS.PREVIOUS_PAGE_LINK, value: 3, isActive: false },
        { type: ITEM_TYPES.PAGE, key: 1, value: 1, isActive: false },
        { type: ITEM_TYPES.PAGE, key: 2, value: 2, isActive: false },
        { type: ITEM_TYPES.PAGE, key: 3, value: 3, isActive: false },
        { type: ITEM_TYPES.PAGE, key: 4, value: 4, isActive: true },
        { type: ITEM_TYPES.PAGE, key: 5, value: 5, isActive: false },
        { type: ITEM_TYPES.NEXT_PAGE_LINK, key: ITEM_KEYS.NEXT_PAGE_LINK, value: 5, isActive: false },
        { type: ITEM_TYPES.LAST_PAGE_LINK, key: ITEM_KEYS.LAST_PAGE_LINK, value: 5, isActive: false }
      ]);
    });

    it('should return ["<<", "<", 1, 2, 3, 4, 5, ">", ">>"] for 5 of 5', function() {
      expect(getPaginationModel({ currentPage: 5, totalPages: 5 })).toEqual([
        { type: ITEM_TYPES.FIRST_PAGE_LINK, key: ITEM_KEYS.FIRST_PAGE_LINK, value: 1, isActive: false },
        { type: ITEM_TYPES.PREVIOUS_PAGE_LINK, key: ITEM_KEYS.PREVIOUS_PAGE_LINK, value: 4, isActive: false },
        { type: ITEM_TYPES.PAGE, key: 1, value: 1, isActive: false },
        { type: ITEM_TYPES.PAGE, key: 2, value: 2, isActive: false },
        { type: ITEM_TYPES.PAGE, key: 3, value: 3, isActive: false },
        { type: ITEM_TYPES.PAGE, key: 4, value: 4, isActive: false },
        { type: ITEM_TYPES.PAGE, key: 5, value: 5, isActive: true },
        { type: ITEM_TYPES.NEXT_PAGE_LINK, key: ITEM_KEYS.NEXT_PAGE_LINK, value: 5, isActive: true },
        { type: ITEM_TYPES.LAST_PAGE_LINK, key: ITEM_KEYS.LAST_PAGE_LINK, value: 5, isActive: true }
      ]);
    });
  });
});
