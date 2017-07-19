import Ember from 'ember';
import layout from '../../../templates/components/base/db-iconav/iconav-brand';

export default Ember.Component.extend({
  layout,

  destination: 'index',
  
  initTooltip: Ember.on('didInsertElement', function () {
    this.$('[data-toggle="tooltip"]').tooltip();
  })
});
