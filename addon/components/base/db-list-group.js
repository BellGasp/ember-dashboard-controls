import Ember from 'ember';
import layout from '../../templates/components/base/db-list-group';

export default Ember.Component.extend({
  layout,

  tagName: 'ul',
  classNames: 'list-group'
});
