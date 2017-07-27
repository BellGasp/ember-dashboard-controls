import Ember from 'ember';
import layout from '../../../templates/components/base/db-iconav/iconav-brand';
import tooltip from '../../../mixins/tooltip';

export default Ember.Component.extend(tooltip, {
  layout,

  destination: 'index'
});
