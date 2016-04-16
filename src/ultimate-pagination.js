(function() {
    'use strict';

    window.ultimatePagination = {
        getPaginationModel: getPaginationModel
    };

    function getPaginationModel(currentPage, totalPages) {
        var paginationModel = [];

        // Always add the first page
        paginationModel.push(1);

        // Show '...' between the first page and main pages group if needed
        if(currentPage > 3) {
            paginationModel.push('...');
        }

        // Add pages +/- from the current page
        var mainPages = _createRange(Math.max(currentPage - 1, 2),  Math.min(currentPage + 1, totalPages - 1));
        paginationModel.push.apply(paginationModel, mainPages);

        // Show '...' between main pages group and the last page if needed
        if(currentPage < totalPages - 2) {
            paginationModel.push('...');
        }

        // Always add the last page
        paginationModel.push(totalPages);

        return paginationModel;
    }

    function _createRange(start, end) {
        var range = [];
        for (var i = start; i <= end; i++) {
            range.push(i);
        }
        return range;
    }
})();
