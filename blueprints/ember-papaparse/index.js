module.exports = {
  description: 'Installation blueprint for ember-papaparse-shim',

  normalizeEntityName: function() {},

  afterInstall: function(options) {
    return this.addBowerPackageToProject('papaparse', '~4.1.2');
  }
};
