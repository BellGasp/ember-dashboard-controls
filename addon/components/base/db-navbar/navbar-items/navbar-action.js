import Ember from 'ember';
import layout from '../../../../templates/components/base/db-navbar/navbar-items/navbar-action';

export default Ember.Component.extend({
  layout,

  tagName: 'li',
  classNames: 'db-navbar-action nav-item',

  onClick() { },

  actions: {
    click() {
      this.get('onClick')();
    }
  }
});
