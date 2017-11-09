/* eslint-env node */
'use strict';

var path = require('path');
var Funnel = require('broccoli-funnel');
var MergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: 'ember-papaparse',

  included(app) {
    this._super.included.apply(this, arguments);

    if (typeof app.import !== 'function' && app.app) {
      app = app.app;
    }
    app.import('vendor/papaparse.js');
    app.import('vendor/shims/papaparse.js');
  },

  treeForVendor(vendorTree) {
    var papaparseTree = new Funnel(path.dirname(require.resolve('papaparse/papaparse.js')), {
      files: ['papaparse.js'],
    });
    var trees = [papaparseTree];
    if (vendorTree) {
      trees.push(vendorTree);
    }
    return new MergeTrees(trees);
  },
};
