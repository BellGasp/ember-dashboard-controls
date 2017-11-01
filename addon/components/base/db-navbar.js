import Ember from 'ember';
import layout from '../../templates/components/base/db-navbar';
import { computed } from '@ember/object';

export default Ember.Component.extend({
  layout,

  tagName: 'nav',
  breakpoint: 'sm',
  inverse: false,

  classNames: 'db-navbar navbar fixed-top app-navbar',
  classNameBindings: ['toggleClass', 'inverse:navbar-inverse:navbar-default'],

  toggleClass: computed('breakpoint', function() {
    return `navbar-toggleable-${this.get('breakpoint')}`;
  }),
});
