import Ember from 'ember';
import layout from '../../../templates/components/base/db-list-group/list-group-item';

const { computed, String: { htmlSafe } } = Ember;

export default Ember.Component.extend({
  layout,

  tagName: 'li',
  classNames: 'list-group-item',

  progress: null,

  displayProgress: computed('progress', function () {
    return typeof this.get('progress') === 'number';
  }),

  progressStyle: computed('progress', function () {
    return new htmlSafe(`width: ${this.get('progress')}%;`);
  })
});
