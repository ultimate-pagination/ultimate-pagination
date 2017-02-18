import {createRange} from './ultimate-pagination-utils';
import {
  createPageFunctionFactory,
  createFirstEllipsis,
  createSecondEllipsis,
  createFirstPageLink,
  createPreviousPageLink,
  createNextPageLink,
  createLastPageLink,
  PaginationModelItem
} from './ultimate-pagination-item-factories';

export interface PaginationModelOptions {
  currentPage: number;
  totalPages: number;
  boundaryPagesRange?: number;
}

export {PaginationModelItem};

export type PaginationModel = PaginationModelItem[];

export function getPaginationModel(options: PaginationModelOptions): PaginationModel {
  const {currentPage, totalPages, boundaryPagesRange = 1} = options;
  const siblingPagesRange = 1;
  const paginationModel: PaginationModelItem[] = [];
  const createPage = createPageFunctionFactory(options);

  paginationModel.push(createFirstPageLink(options));
  paginationModel.push(createPreviousPageLink(options));

  // Simplify generation of pages if number of available items is equal or greater than total pages to show
  if (1 + 2 + siblingPagesRange * 2 + boundaryPagesRange * 2 >= totalPages) {
    const allPages = createRange(1,  totalPages).map(createPage);
    paginationModel.push(...allPages);
  } else {
    // Calculate group of first pages
    const firstPagesStart = 1;
    const firstPagesEnd = boundaryPagesRange;
    const firstPages = createRange(firstPagesStart,  firstPagesEnd).map(createPage);

    // Calculate group of last pages
    const lastPagesStart = totalPages + 1 - boundaryPagesRange;
    const lastPagesEnd = totalPages;
    const lastPages = createRange(lastPagesStart, lastPagesEnd).map(createPage);

    // Calculate group of main pages
    const mainPagesStart = Math.min(Math.max(currentPage - 1, firstPagesEnd + 2), lastPagesStart - 4);
    const mainPagesEnd = mainPagesStart + 2;
    const mainPages = createRange(mainPagesStart,  mainPagesEnd).map(createPage);

    // Calculate ellipsis before group of main pages
    const firstEllipsisPageNumber = mainPagesStart - 1;
    const showPageInsteadOfFirstEllipsis = (firstEllipsisPageNumber === firstPagesEnd + 1);
    const createFirstEllipsisOrPage = showPageInsteadOfFirstEllipsis ? createPage : createFirstEllipsis;
    const firstEllipsis = createFirstEllipsisOrPage(firstEllipsisPageNumber);

    // Calculate ellipsis after group of main pages
    const secondEllipsisPageNumber = mainPagesEnd + 1;
    const showPageInsteadOfSecondEllipsis = (secondEllipsisPageNumber === lastPagesStart - 1);
    const createSecondEllipsisOrPage = showPageInsteadOfSecondEllipsis ? createPage : createSecondEllipsis;
    const secondEllipsis = createSecondEllipsisOrPage(secondEllipsisPageNumber);

    paginationModel.push(
      ...firstPages,
      firstEllipsis,
      ...mainPages,
      secondEllipsis,
      ...lastPages
    );
  }

  paginationModel.push(createNextPageLink(options));
  paginationModel.push(createLastPageLink(options));

  return paginationModel;
}

export {ITEM_TYPES, ITEM_KEYS, PaginationItemType} from './ultimate-pagination-constants';
