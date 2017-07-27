import Ember from 'ember';
import layout from '../../../templates/components/base/db-iconav/iconav-item';
import Tooltip from '../../../mixins/tooltip';

export default Ember.Component.extend(Tooltip, {
  layout,

  tagName: 'li',
  classNames: 'nav-item',

  destination: 'index'
});
