import Ember from 'ember';
import layout from '../../../templates/components/base/db-iconav/iconav-item';

export default Ember.Component.extend({
  layout,

  tagName: 'li',
  classNames: 'nav-item',

  destination: 'index'
});