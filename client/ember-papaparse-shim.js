(function() {
  /* globals define, Papa */

  function generateModule(name, values) {
    define(name, [], function() {
      'use strict';

      return values;
    });
  }

  generateModule('papaparse', {
    'default': typeof FastBoot === 'undefined' ? Papa : {
      parse: function() {
        return {
          data: [],
          errors: [],
          meta: {}
        };
      },
      unparse: function() {
        return '';
      },
      process: function() {}
    }
  });
})();
