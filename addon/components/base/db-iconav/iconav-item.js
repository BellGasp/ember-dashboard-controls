import Ember from 'ember';
import layout from '../../../templates/components/base/db-iconav/iconav-item';
import tooltip from '../../../mixins/tooltip';

export default Ember.Component.extend(tooltip, {
  layout,

  tagName: 'li',
  classNames: 'nav-item',

  destination: 'index'
});
