/// <reference path="./matchers/to-equal-pagination.d.ts"/>

import {toEqualPagination} from './matchers/to-equal-pagination';

beforeEach(function() {
    jasmine.addMatchers({
        toEqualPagination
    });
});
