import Component from '@ember/component';
import layout from '../../../templates/components/base/db-divider/divider-navigation';

export default Component.extend({
  layout,

  tagName: 'ul',
  classNames: 'nav nav-pills hr-divider-content hr-divider-nav'
});
