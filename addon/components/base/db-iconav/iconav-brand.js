import Component from '@ember/component';
import layout from '../../../templates/components/base/db-iconav/iconav-brand';
import Tooltip from '../../../mixins/tooltip';

export default Component.extend(Tooltip, {
  layout,

  destination: 'index'
});
