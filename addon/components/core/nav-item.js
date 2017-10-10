import Component from '@ember/component';
import layout from '../../templates/components/core/nav-item';

export default Component.extend({
  layout,

  tagName: 'li',
  classNames: 'nav-item',

  destination: null,
  label: ''
});
