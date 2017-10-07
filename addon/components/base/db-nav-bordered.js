import Component from '@ember/component';
import layout from '../../templates/components/base/db-nav-bordered';

export default Component.extend({
  layout,

  tagName: 'ul',
  classNames: 'nav nav-bordered'
});
