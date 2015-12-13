import { module, test } from 'qunit';
import PapaParse from 'papaparse';

module('Papaparse as an ES6 module');

test('it is a valid module', function(assert) {
  assert.ok(PapaParse, 'module export is truthy');
  assert.equal(typeof PapaParse.parse, 'function', 'module has a "parse" function');
});
