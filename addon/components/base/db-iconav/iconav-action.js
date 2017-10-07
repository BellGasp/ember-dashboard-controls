import Component from '@ember/component';
import layout from '../../../templates/components/base/db-iconav/iconav-action';
import Tooltip from '../../../mixins/tooltip';

export default Component.extend(Tooltip, {
  layout,

  tagName: 'li',
  classNames: 'nav-item',

  onClick() {},

  click() {
    this.get('onClick')();
  }
});
