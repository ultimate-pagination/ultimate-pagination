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

function paginationModelItemToSymbolPart(item: PaginationModelItem) {
        switch (item.type) {
            case ITEM_TYPES.FIRST_PAGE_LINK: return '<<';
            case ITEM_TYPES.PREVIOUS_PAGE_LINK: return '<';
            case ITEM_TYPES.NEXT_PAGE_LINK: return '>';
            case ITEM_TYPES.LAST_PAGE_LINK: return '>>';
            case ITEM_TYPES.ELLIPSIS: return (item.key === -1 ? '<...' : '...>');
        }
}

function formatPaginationModelToASCII(paginationModel: PaginationModel) {
    return formatArray(paginationModel.map(item => {
        const symbolPart = paginationModelItemToSymbolPart(item);
        return [
            item.isActive ? '*' : '',
            item.value,
            symbolPart ? `(${symbolPart})` : ''
        ].join('');
    }));
}

function formatArray(arr: any[]) {
    return '[' + arr.join(', ') + ']';
}

function generateMessage(actual: any[], expected: any[]) {
    try {
        return `Expected pagination \n  ${formatPaginationModelToASCII(actual)} \nto equal pagination \n  ${formatArray(expected)}`;
    } catch (e) {
        // Fallback to default message on exception
        return '';
    }
}

export const toEqualPagination: jasmine.CustomMatcherFactory = function(util, customEqualityTester) {
    return {
        compare(actual: PaginationModel, expected: string[]) {
            if (actual.length !== expected.length) {
                return {
                    pass: false,
                    message: generateMessage(actual, expected)
                };
            } else {
                return {
                    pass: actual.every((actualItem, i) => {
                        const expectedItem = parseExpectedPage(expected[i]);
                        return util.equals(actualItem, expectedItem);
                    }),
                    message: generateMessage(actual, expected)
                };
            }
        }
    };
};
