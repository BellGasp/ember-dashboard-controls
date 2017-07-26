import Ember from 'ember';
import layout from '../../../templates/components/base/db-iconav/iconav-brand';

const { on, observer } = Ember

export default Ember.Component.extend({
  layout,

  destination: 'index',

  initTooltip: on('didInsertElement', observer('title', function () {
    this.$('[data-toggle="tooltip"]').tooltip('dispose').tooltip();
  })),
});
