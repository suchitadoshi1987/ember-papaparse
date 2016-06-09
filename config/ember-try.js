/*jshint node:true*/
module.exports = {
  scenarios: [{
    name: 'ember-1.10',
    bower: {
      dependencies: {
        'ember': '~1.10.0',
        'ember-cli-shims': '0.0.6',
        'ember-cli-test-loader': '0.2.1',
        'ember-data': '1.13.15',
        'ember-load-initializers': '0.1.7',
        'ember-qunit': '0.4.16',
        'ember-qunit-notifications': '0.1.0',
        'ember-resolver': '~0.1.20',
        'jquery': '~1.11.3',
        'loader.js': 'ember-cli/loader.js#3.4.0'
      },
      resolutions: {
        'ember': '~1.10.0'
      }
    }
  }, {
    name: 'ember-1.11',
    bower: {
      dependencies: {
        'ember': '~1.11.0'
      },
      resolutions: {
        'ember': '~1.11.0'
      }
    }
  }, {
    name: 'ember-1.12',
    bower: {
      dependencies: {
        'ember': '~1.12.0'
      },
      resolutions: {
        'ember': '~1.12.0'
      }
    }
  }, {
    name: 'ember-1.13',
    bower: {
      dependencies: {
        'ember': '~1.13.0'
      },
      resolutions: {
        'ember': '~1.13.0'
      }
    }
  }, {
    name: 'ember-2.0',
    bower: {
      dependencies: {
        'ember': '~2.0.0'
      },
      resolutions: {
        'ember': '~2.0.0'
      }
    }
  }, {
    name: 'ember-2.4',
    bower: {
      dependencies: {
        'ember': '~2.4.0'
      },
      resolutions: {
        'ember': '~2.4.0'
      }
    }
  }, {
    name: 'ember-release',
    bower: {
      dependencies: {
        'ember': 'components/ember#release'
      },
      resolutions: {
        'ember': 'release'
      }
    }
  }, {
    name: 'ember-beta',
    bower: {
      dependencies: {
        'ember': 'components/ember#beta'
      },
      resolutions: {
        'ember': 'beta'
      }
    }
  }, {
    name: 'ember-canary',
    bower: {
      dependencies: {
        'ember': 'components/ember#canary'
      },
      resolutions: {
        'ember': 'canary'
      }
    }
  }]
};
