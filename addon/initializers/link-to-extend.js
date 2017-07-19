import Ember from 'ember';

export function initialize() {
  Ember.LinkComponent.reopen({
    attributeBindings: ['data-toggle', 'data-placement', 'data-container']
  })
}

export default {
  name: 'link-to-data-attributes',
  initialize
};
