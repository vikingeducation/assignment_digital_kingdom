const helperLoader = new require('load-helpers')();

module.exports = helperLoader.load('helpers/*_helper.js').cache;
