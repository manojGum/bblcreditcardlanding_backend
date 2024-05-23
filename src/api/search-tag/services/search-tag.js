'use strict';

/**
 * search-tag service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::search-tag.search-tag');
