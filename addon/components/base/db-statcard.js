import Component from '@ember/component';
import { computed } from '@ember/object';
import layout from '../../templates/components/base/db-statcard';

export default Component.extend({
  layout,

  classNames: 'statcard',

  direction: 'positive',

  deltaClass: computed('direction', function() {
    return `delta-${this.get('direction')}`;
  }),
});
