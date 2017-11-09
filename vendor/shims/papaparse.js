(function() {
  function vendorModule() {
    'use strict';

    return {
      'default': self['Papa'],
      __esModule: true,
    };
  }

  define('papaparse', [], vendorModule);
})();
