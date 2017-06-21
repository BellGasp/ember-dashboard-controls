import Ember from 'ember';
import layout from '../../../templates/components/base/db-list-group/list-group-header';

export default Ember.Component.extend({
  layout,

  tagName: 'li',
  classNames: 'list-group-header'
});
