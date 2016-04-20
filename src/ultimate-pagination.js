import {createRange} from './ultimate-pagination-utils';

export function getPaginationModel(currentPage, totalPages) {
  let paginationModel = [];

  // Calculate group of central pages
  let mainPagesStart = Math.max(currentPage - 1, 3) - Math.max(0, currentPage + 3 - totalPages);
  let mainPagesEnd = Math.min(currentPage + 1, totalPages - 2) + Math.max(0, 4 - currentPage);
  let mainPages = createRange(mainPagesStart,  mainPagesEnd);

  // Always add the first page
  paginationModel.push(1);

  // Show '...' or second page between the last page and main pages group if needed
  if (mainPagesStart > 3) {
    paginationModel.push('...');
  } else {
    paginationModel.push(2);
  }

  // Add pages +/- from the current page
  paginationModel.push(...mainPages);

  // Show '...' or penult page between main pages group and the last page if needed
  if (mainPagesEnd < totalPages - 2) {
    paginationModel.push('...');
  } else {
    paginationModel.push(totalPages - 1);
  }

  // Always add the last page
  paginationModel.push(totalPages);

  return paginationModel;
}
