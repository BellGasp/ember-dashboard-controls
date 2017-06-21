import Ember from 'ember';
import layout from '../../../templates/components/base/db-iconav/iconav-action';

export default Ember.Component.extend({
  layout,

  tagName: 'li',
  classNames: 'nav-item',

  onClick() {},

  click() {
    this.get('onClick')();
  }
});
