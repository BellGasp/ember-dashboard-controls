import Component from '@ember/component';
import layout from '../../../templates/components/base/db-iconav/iconav-item';
import Tooltip from '../../../mixins/tooltip';

export default Component.extend(Tooltip, {
  layout,

  tagName: 'li',
  classNames: 'nav-item',

  destination: 'index'
});
