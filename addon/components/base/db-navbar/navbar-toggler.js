import Ember from 'ember';
import layout from '../../../templates/components/base/db-navbar/navbar-toggler';
import { computed } from '@ember/object';
import { alias } from '@ember/object/computed';

export default Ember.Component.extend({
  layout,

  tagName: 'button',
  classNames: 'db-navbar-toggler navbar-toggler',
  classNameBindings: ['sideClass', 'breakpointClass'],
  attributeBindings: [
    'dataToggle:data-toggle',
    'dataTarget:data-target',
    'ariaControls:aria-controls',
    'ariaExpanded:aria-expanded',
    'ariaLabel:aria-label',
  ],

  side: 'right',
  breakpoint: 'md',
  dataToggle: 'collapse',
  ariaExpanded: false,
  ariaLabel: 'Toggle Navigation',

  ariaControls: alias('navbarId'),

  sideClass: computed('side', function() {
    return `navbar-toggler-${this.get('side')}`;
  }),

  breakpointClass: computed('breakpoint', function() {
    return `hidden-${this.get('side')}-up`;
  }),

  dataTarget: computed('navbarId', function() {
    return `#${this.get('navbarId')}`;
  }),
});
