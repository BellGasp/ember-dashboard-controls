import Component from '@ember/component';
import { computed } from '@ember/object';
import { htmlSafe } from '@ember/string';
import layout from '../../../templates/components/base/db-list-group/list-group-item';

export default Component.extend({
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
