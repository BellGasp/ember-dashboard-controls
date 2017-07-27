import Ember from 'ember';
import layout from '../../../templates/components/base/db-iconav/iconav-brand';
import Tooltip from '../../../mixins/tooltip';

export default Ember.Component.extend(Tooltip, {
  layout,

  destination: 'index'
});
