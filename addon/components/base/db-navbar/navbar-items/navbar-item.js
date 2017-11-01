import Ember from 'ember';
import layout from '../../../../templates/components/base/db-navbar/navbar-items/navbar-item';

export default Ember.Component.extend({
  layout,

  tagName: 'li',
  classNames: 'db-navbar-item nav-item',

  destination: 'index'
});
