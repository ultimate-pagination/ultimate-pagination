import {getPaginationModel, ITEM_TYPES, ITEM_KEYS} from '../src/ultimate-pagination';

describe('getPaginationModel', function() {
  describe('when there are 4 pages', function() {
    it('should return ["<<", "<", 1, 2, 3, 4, ">", ">>"] for 1 of 4', function() {
      expect(getPaginationModel({ currentPage: 1, totalPages: 4 })).toEqual([
        { type: ITEM_TYPES.FIRST_PAGE_LINK, key: ITEM_KEYS.FIRST_PAGE_LINK, value: 1, isActive: true },
        { type: ITEM_TYPES.PREVIOS_PAGE_LINK, key: ITEM_KEYS.PREVIOS_PAGE_LINK, value: 1, isActive: true },
        { type: ITEM_TYPES.PAGE, key: 1, value: 1, isActive: true },
        { type: ITEM_TYPES.PAGE, key: 2, value: 2, isActive: false },
        { type: ITEM_TYPES.PAGE, key: 3, value: 3, isActive: false },
        { type: ITEM_TYPES.PAGE, key: 4, value: 4, isActive: false },
        { type: ITEM_TYPES.NEXT_PAGE_LINK, key: ITEM_KEYS.NEXT_PAGE_LINK, value: 2, isActive: false },
        { type: ITEM_TYPES.LAST_PAGE_LINK, key: ITEM_KEYS.LAST_PAGE_LINK, value: 4, isActive: false }
      ]);
    });

    it('should return ["<<", "<", 1, 2, 3, 4, ">", ">>"] for 2 of 4', function() {
      expect(getPaginationModel({ currentPage: 2, totalPages: 4 })).toEqual([
        { type: ITEM_TYPES.FIRST_PAGE_LINK, key: ITEM_KEYS.FIRST_PAGE_LINK, value: 1, isActive: false },
        { type: ITEM_TYPES.PREVIOS_PAGE_LINK, key: ITEM_KEYS.PREVIOS_PAGE_LINK, value: 1, isActive: false },
        { type: ITEM_TYPES.PAGE, key: 1, value: 1, isActive: false },
        { type: ITEM_TYPES.PAGE, key: 2, value: 2, isActive: true },
        { type: ITEM_TYPES.PAGE, key: 3, value: 3, isActive: false },
        { type: ITEM_TYPES.PAGE, key: 4, value: 4, isActive: false },
        { type: ITEM_TYPES.NEXT_PAGE_LINK, key: ITEM_KEYS.NEXT_PAGE_LINK, value: 3, isActive: false },
        { type: ITEM_TYPES.LAST_PAGE_LINK, key: ITEM_KEYS.LAST_PAGE_LINK, value: 4, isActive: false }
      ]);
    });

    it('should return ["<<", "<", 1, 2, 3, 4, ">", ">>"] for 3 of 4', function() {
      expect(getPaginationModel({ currentPage: 3, totalPages: 4 })).toEqual([
        { type: ITEM_TYPES.FIRST_PAGE_LINK, key: ITEM_KEYS.FIRST_PAGE_LINK, value: 1, isActive: false },
        { type: ITEM_TYPES.PREVIOS_PAGE_LINK, key: ITEM_KEYS.PREVIOS_PAGE_LINK, value: 2, isActive: false },
        { type: ITEM_TYPES.PAGE, key: 1, value: 1, isActive: false },
        { type: ITEM_TYPES.PAGE, key: 2, value: 2, isActive: false },
        { type: ITEM_TYPES.PAGE, key: 3, value: 3, isActive: true },
        { type: ITEM_TYPES.PAGE, key: 4, value: 4, isActive: false },
        { type: ITEM_TYPES.NEXT_PAGE_LINK, key: ITEM_KEYS.NEXT_PAGE_LINK, value: 4, isActive: false },
        { type: ITEM_TYPES.LAST_PAGE_LINK, key: ITEM_KEYS.LAST_PAGE_LINK, value: 4, isActive: false }
      ]);
    });

    it('should return ["<<", "<", 1, 2, 3, 4, ">", ">>"] for 4 of 4', function() {
      expect(getPaginationModel({ currentPage: 4, totalPages: 4 })).toEqual([
        { type: ITEM_TYPES.FIRST_PAGE_LINK, key: ITEM_KEYS.FIRST_PAGE_LINK, value: 1, isActive: false },
        { type: ITEM_TYPES.PREVIOS_PAGE_LINK, key: ITEM_KEYS.PREVIOS_PAGE_LINK, value: 3, isActive: false },
        { type: ITEM_TYPES.PAGE, key: 1, value: 1, isActive: false },
        { type: ITEM_TYPES.PAGE, key: 2, value: 2, isActive: false },
        { type: ITEM_TYPES.PAGE, key: 3, value: 3, isActive: false },
        { type: ITEM_TYPES.PAGE, key: 4, value: 4, isActive: true },
        { type: ITEM_TYPES.NEXT_PAGE_LINK, key: ITEM_KEYS.NEXT_PAGE_LINK, value: 4, isActive: true },
        { type: ITEM_TYPES.LAST_PAGE_LINK, key: ITEM_KEYS.LAST_PAGE_LINK, value: 4, isActive: true }
      ]);
    });
  });
});
