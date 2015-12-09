/* jshint node: true */
'use strict';

module.exports = {
  name: 'papaparser',
  included: function(app) {
    this._super.included.apply(this, arguments);


    app.import(app.bowerDirectory + '/papaparse/papaparse.js');
  }
};
