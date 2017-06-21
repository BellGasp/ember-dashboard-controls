import Ember from 'ember';
import layout from '../../../templates/components/base/db-divider/divider-heading';

export default Ember.Component.extend({
  layout,

  tagName: 'h3',
  classNames: 'hr-divider-content hr-divider-heading'
});
