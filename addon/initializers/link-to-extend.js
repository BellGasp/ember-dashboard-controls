import LinkComponent from '@ember/routing/link-component';

export function initialize() {
  LinkComponent.reopen({
    attributeBindings: ['data-toggle', 'data-placement', 'data-container']
  })
}

export default {
  name: 'link-to-data-attributes',
  initialize
};
