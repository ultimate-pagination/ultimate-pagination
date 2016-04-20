import {createRange} from './ultimate-pagination-utils';

export function getPaginationModel(currentPage, totalPages) {
  let paginationModel = [];

  // Calculate group of central pages
  let mainPagesStart = Math.max(currentPage - 1, 2) - Math.max(0, currentPage + 2 - totalPages);
  let mainPagesEnd = Math.min(currentPage + 1, totalPages - 1) + Math.max(0, 3 - currentPage);
  let mainPages = createRange(mainPagesStart,  mainPagesEnd);

  // Always add the first page
  paginationModel.push(1);

  // Show '...' or second page between the last page and main pages group if needed
  if (mainPagesStart === 3) {
    paginationModel.push(2);
  } else if (mainPagesStart > 3) {
    paginationModel.push('...');
  }

  // Add pages +/- from the current page
  paginationModel.push(...mainPages);

  // Show '...' or penult page between main pages group and the last page if needed
  if (mainPagesEnd === totalPages - 2) {
    paginationModel.push(totalPages - 1);
  } else if(mainPagesEnd < totalPages - 2) {
    paginationModel.push('...');
  }

  // Always add the last page
  paginationModel.push(totalPages);

  return paginationModel;
}
