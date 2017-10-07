import Component from '@ember/component';
import layout from '../../../templates/components/base/db-dashhead/dashhead-toolbar-divider';

export default Component.extend({
  layout,

  tagName: 'span',
  classNames: 'dashhead-toolbar-divider hidden-xs'
});
