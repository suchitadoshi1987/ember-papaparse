(function() {
  /* globals define, Papa */

  function generateModule(name, values) {
    define(name, [], function() {
      'use strict';

      return values;
    });
  }

  generateModule('papaparse', { 'default': Papa });
})();
