import Ember from 'ember';
import layout from '../../../templates/components/base/db-iconav/iconav-action';

export default Ember.Component.extend({
  layout,

  tagName: 'li',
  classNames: 'nav-item',
  initTooltip: Ember.on('didInsertElement', function () {
    this.$('[data-toggle="tooltip"]').tooltip();
  }),
  onClick() {},

  click() {
    this.get('onClick')();
  }
});
