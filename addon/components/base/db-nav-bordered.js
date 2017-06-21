import Ember from 'ember';
import layout from '../../templates/components/base/db-nav-bordered';

export default Ember.Component.extend({
  layout,

  tagName: 'ul',
  classNames: 'nav nav-bordered'
});
