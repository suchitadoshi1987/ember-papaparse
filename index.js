/* jshint node: true */
'use strict';
var path = require('path');

module.exports = {
  name: 'ember-papaparse',

  included: function(app) {
    app.import(app.bowerDirectory + '/papaparse/papaparse.js');
    app.import('vendor/ember-papaparse-shim.js', {
      exports: {
        papaparse: ['default']
      }
    });
  },

  treeForVendor: function() {
    return path.join(__dirname, 'client');
  }
};
