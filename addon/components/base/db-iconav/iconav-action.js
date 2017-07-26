import Ember from 'ember';
import layout from '../../../templates/components/base/db-iconav/iconav-action';

const { on, observer } = Ember

export default Ember.Component.extend({
  layout,

  tagName: 'li',
  classNames: 'nav-item',

  initTooltip: on('didInsertElement', observer('title', function () {
    this.$('[data-toggle="tooltip"]').tooltip('dispose').tooltip();
  })),

  onClick() {},

  click() {
    this.get('onClick')();
  }
});
