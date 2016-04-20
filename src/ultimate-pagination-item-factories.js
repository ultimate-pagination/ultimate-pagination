import {ITEM_TYPES} from './ultimate-pagination-constants';

export const createPageFunctionFactory = (currentPage) => {
  return (pageNumber) => {
    return {
      type: ITEM_TYPES.PAGE,
      value: pageNumber,
      isActive: pageNumber === currentPage
    };
  };
}

 // Use -1 and -2 value to make value an uniq key for items
export const createFirstEllipsis = () => createEllipsis(-1);
export const createSecondEllipsis = () => createEllipsis(-2);

export const createEllipsis = (value) => {
  return {
    type: ITEM_TYPES.ELLIPSIS,
    value: value
  };
};
