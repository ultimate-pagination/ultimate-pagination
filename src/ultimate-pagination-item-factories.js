import {ITEM_TYPES, ITEM_KEYS} from './ultimate-pagination-constants';

export const createFirstEllipsis = () => {
  return {
    type: ITEM_TYPES.ELLIPSIS,
    key: ITEM_KEYS.FIRST_ELLIPSIS
  };
};

export const createSecondEllipsis = () => {
  return {
    type: ITEM_TYPES.ELLIPSIS,
    key: ITEM_KEYS.SECOND_ELLISPIS
  };
};

export const createFirstPageLink = ({currentPage}) => {
  return {
    type: ITEM_TYPES.FIRST_PAGE_LINK,
    key: ITEM_KEYS.FIRST_PAGE_LINK,
    value: 1,
    isActive: currentPage === 1
  };
};

export const createPreviousPageLink = ({currentPage, totalPages}) => {
  return {
    type: ITEM_TYPES.PREVIOS_PAGE_LINK,
    key: ITEM_KEYS.PREVIOS_PAGE_LINK,
    value: Math.max(1, currentPage - 1),
    isActive: currentPage === 1
  };
};

export const createNextPageLink = ({currentPage, totalPages}) => {
  return {
    type: ITEM_TYPES.NEXT_PAGE_LINK,
    key: ITEM_KEYS.NEXT_PAGE_LINK,
    value: Math.min(totalPages, currentPage + 1),
    isActive: currentPage === totalPages
  };
};

export const createLastPageLink = ({currentPage, totalPages}) => {
  return {
    type: ITEM_TYPES.LAST_PAGE_LINK,
    key: ITEM_KEYS.LAST_PAGE_LINK,
    value: totalPages,
    isActive: currentPage === totalPages
  };
};

export const createPageFunctionFactory = ({currentPage}) => {
  return (pageNumber) => {
    return {
      type: ITEM_TYPES.PAGE,
      key: pageNumber,
      value: pageNumber,
      isActive: pageNumber === currentPage
    };
  };
}
