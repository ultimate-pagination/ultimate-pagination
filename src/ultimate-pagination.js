import {createRange} from './ultimate-pagination-utils';

export function getPaginationModel(currentPage, totalPages) {
  let paginationModel = [];

  // Always add the first page
  paginationModel.push(1);

  // Show '...' between the first page and main pages group if needed
  if(currentPage > 3) {
    paginationModel.push('...');
  }

  // Add pages +/- from the current page
  let mainPagesStart = Math.max(currentPage - 1, 2);
  let mainPagesEnd = Math.min(currentPage + 1, totalPages - 1);
  let mainPages = createRange(mainPagesStart,  mainPagesEnd);
  paginationModel.push(...mainPages);

  // Show '...' between main pages group and the last page if needed
  if(currentPage < totalPages - 2) {
    paginationModel.push('...');
  }

  // Always add the last page
  paginationModel.push(totalPages);

  return paginationModel;
}
