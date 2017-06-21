import Ember from 'ember';
import layout from '../../templates/components/base/db-statcard';

const { Component, computed } = Ember;
export default Component.extend({
  layout,

  classNames: 'statcard',

  direction: 'positive',

  deltaClass: computed('direction', function() {
    return `delta-${this.get('direction')}`;
  }),
});
