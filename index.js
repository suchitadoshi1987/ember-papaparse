/* eslint-env node */
'use strict';

module.exports = {
  name: 'papaparse',
  included: function(app) {
    app.import(app.bowerDirectory + '/papaparse/papaparse.js');
  }
};
