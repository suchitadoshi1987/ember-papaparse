import Ember from 'ember';
import Papa from 'papaparse';

const { computed } = Ember;

export default Ember.Component.extend({
  classNames: ['x-csv-example'],
  csvSource: `first_name,last_name,email
Walter,White,heisenberg@example.com
Jesee,Pinkman,chili-p@example.com`,
  parseErrors: null,
  useHeaders: false,
  parsedResult: computed('csvSource', 'useHeaders', function() {
    const src = this.get('csvSource');
    const result = Papa.parse(src, {
      header: this.get('useHeaders')
    });
    this.get('parseErrors').setObjects(result.errors);
    return '\n' + JSON.stringify(result.data, null, 2);
  }),

  init() {
    this._super(...arguments);
    this.set('parseErrors', Ember.A([]));
  }
});
