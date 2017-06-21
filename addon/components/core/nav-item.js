import Ember from 'ember';
import layout from '../../templates/components/core/nav-item';

export default Ember.Component.extend({
  layout,

  tagName: 'li',
  classNames: 'nav-item',

  destination: null,
  label: ''
});
