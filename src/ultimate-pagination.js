import {createRange} from './ultimate-pagination-utils';
import {createPageFunctionFactory, createFirstEllipsis, createSecondEllipsis} from './ultimate-pagination-item-factories';

export function getPaginationModel(currentPage, totalPages) {
  const paginationModel = [];
  const createPage = createPageFunctionFactory(currentPage);

  // Calculate group of central pages
  const mainPagesStart = Math.max(currentPage - 1, 3) - Math.max(0, currentPage + 3 - totalPages);
  const mainPagesEnd = Math.min(currentPage + 1, totalPages - 2) + Math.max(0, 4 - currentPage);
  const mainPages = createRange(mainPagesStart,  mainPagesEnd).map(createPage);

  // Always add the first page
  paginationModel.push(createPage(1));

  // Show '...' or second page between the last page and main pages group if needed
  if (mainPagesStart > 3) {
    paginationModel.push(createFirstEllipsis());
  } else {
    paginationModel.push(createPage(2));
  }

  // Add pages +/- from the current page
  paginationModel.push(...mainPages);

  // Show '...' or penult page between main pages group and the last page if needed
  if (mainPagesEnd < totalPages - 2) {
    paginationModel.push(createSecondEllipsis());
  } else {
    paginationModel.push(createPage(totalPages - 1));
  }

  // Always add the last page
  paginationModel.push(createPage(totalPages));

  return paginationModel;
}

export {ITEM_TYPES} from './ultimate-pagination-constants';
