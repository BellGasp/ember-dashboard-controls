import Ember from 'ember';
import layout from '../../../templates/components/base/db-iconav/iconav-action';
import Tooltip from '../../../mixins/tooltip';

export default Ember.Component.extend(Tooltip, {
  layout,

  tagName: 'li',
  classNames: 'nav-item',

  onClick() {},

  click() {
    this.get('onClick')();
  }
});
