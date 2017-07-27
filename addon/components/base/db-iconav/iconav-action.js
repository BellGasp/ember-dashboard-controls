import Ember from 'ember';
import layout from '../../../templates/components/base/db-iconav/iconav-action';
import tooltip from '../../../mixins/tooltip';

export default Ember.Component.extend(tooltip, {
  layout,

  tagName: 'li',
  classNames: 'nav-item',

  onClick() {},

  click() {
    this.get('onClick')();
  }
});
