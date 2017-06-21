import Ember from 'ember';
import layout from '../../../templates/components/base/db-dashhead/dashhead-toolbar-divider';

export default Ember.Component.extend({
  layout,

  tagName: 'span',
  classNames: 'dashhead-toolbar-divider hidden-xs'
});
