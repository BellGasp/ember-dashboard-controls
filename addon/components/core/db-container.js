import Component from '@ember/component';
import layout from '../../templates/components/core/db-container';
import { computed } from '@ember/object';

export default Component.extend({
  layout,

  classNames: 'db-container',
  classNameBindings: [
    'basic:container',
    'fluid:container-fluid',
    'spacious:container-fluid-spacious'
  ],

  fluid: false,
  spacious: false,

  basic: computed('fluid', 'spacious', function() {
    return !this.get('fluid') && !this.get('spacious');
  }),
});
