import {
    PaginationModel,
    PaginationModelItem,
    ITEM_TYPES,
    ITEM_KEYS,
    PaginationItemType
} from '../../../src/ultimate-pagination';

interface SymbolToTypeMap {
    [symbol: string]: PaginationItemType;
}

const EXPECTED_PAGE_REG_EXP = /^(\*)?(\d+)(?:\((.+)\))?$/;

const symbolToTypeMap: SymbolToTypeMap = {
    '<...': ITEM_TYPES.ELLIPSIS,
    '...>': ITEM_TYPES.ELLIPSIS,
    '<<': ITEM_TYPES.FIRST_PAGE_LINK,
    '<': ITEM_TYPES.PREVIOUS_PAGE_LINK,
    '>': ITEM_TYPES.NEXT_PAGE_LINK,
    '>>': ITEM_TYPES.LAST_PAGE_LINK
};

interface SymbolToKeyMap {
    [symbol: string]: number;
}

const symbolToKeyMap: SymbolToKeyMap = {
  '<...': -1,
  '...>': -2,
  '<<': -3,
  '<': -4,
  '>': -5,
  '>>': -6
};

function parseExpectedPage(expectedPage: string): PaginationModelItem {
     const matches = expectedPage.match(EXPECTED_PAGE_REG_EXP);

    if (!matches) {
        throw new Error(`Can't parse expected page "${expectedPage}"`);
    }

    const [, isActivePart, valuePart, symbolPart] = matches;

    const isActive = !!isActivePart;
    const type = symbolToTypeMap[symbolPart] || 'PAGE';
    const value = +valuePart;
    const key = symbolToKeyMap[symbolPart] || value;

    return {key, type, value, isActive};
}

export const toEqualPagination: jasmine.CustomMatcherFactory = function(util, customEqualityTester) {
    return {
        compare(actual: PaginationModel, expected: string[]) {
            if (actual.length !== expected.length) {
                return {pass: false};
            } else {
                return {
                    pass: actual.every((actualItem, i) => {
                        const expectedItem = parseExpectedPage(expected[i]);
                        return util.equals(actualItem, expectedItem);
                    })
                };
            }
        }
    };
};
