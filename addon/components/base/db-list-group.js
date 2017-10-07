import Component from '@ember/component';
import layout from '../../templates/components/base/db-list-group';

export default Component.extend({
  layout,

  tagName: 'ul',
  classNames: 'list-group'
});
