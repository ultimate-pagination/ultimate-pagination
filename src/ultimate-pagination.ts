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
}

export {PaginationModelItem};

export type PaginationModel = PaginationModelItem[];

export function getPaginationModel(options: PaginationModelOptions): PaginationModel {
  const {currentPage, totalPages} = options;
  const paginationModel: PaginationModelItem[] = [];
  const createPage = createPageFunctionFactory(options);

  // Calculate group of central pages
  const mainPagesStart = Math.max(2, Math.max(currentPage - 1, 3) - Math.max(0, currentPage + 3 - totalPages));
  const mainPagesEnd = Math.min(totalPages - 1, Math.min(currentPage + 1, totalPages - 2) + Math.max(0, 4 - currentPage));
  const mainPages = createRange(mainPagesStart,  mainPagesEnd).map(createPage);

  paginationModel.push(createFirstPageLink(options));
  paginationModel.push(createPreviousPageLink(options));

  // Always add the first page
  paginationModel.push(createPage(1));

  // Show '...' or second page between the last page and main pages group if needed
  if (mainPagesStart > 3) {
    paginationModel.push(createFirstEllipsis(mainPagesStart - 1));
  } else if (mainPagesStart !== 2) {
    paginationModel.push(createPage(2));
  }

  // Add pages +/- from the current page
  paginationModel.push(...mainPages);

  // Show '...' or penult page between main pages group and the last page if needed
  if (mainPagesEnd < totalPages - 2) {
    paginationModel.push(createSecondEllipsis(mainPagesEnd + 1));
  } else if (mainPagesEnd !== totalPages - 1) {
    paginationModel.push(createPage(totalPages - 1));
  }

  if (totalPages > 1) {
    paginationModel.push(createPage(totalPages));
  }
  paginationModel.push(createNextPageLink(options));
  paginationModel.push(createLastPageLink(options));

  return paginationModel;
}

export {ITEM_TYPES, ITEM_KEYS, PaginationItemType} from './ultimate-pagination-constants';
