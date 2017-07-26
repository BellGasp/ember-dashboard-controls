import Ember from 'ember';
import layout from '../../../templates/components/base/db-iconav/iconav-item';

const { on, observer } = Ember

export default Ember.Component.extend({
  layout,

  tagName: 'li',
  classNames: 'nav-item',

  destination: 'index',

  initTooltip: on('didInsertElement', observer('title', function () {
    this.$('[data-toggle="tooltip"]').tooltip();
  })),
});
