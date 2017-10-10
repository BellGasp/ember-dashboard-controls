import EmberObject from '@ember/object';
import TooltipMixin from 'ember-dashboard-controls/mixins/tooltip';
import { module, test } from 'qunit';

module('Unit | Mixin | tooltip');

// Replace this with your real tests.
test('it works', function(assert) {
  let TooltipObject = EmberObject.extend(TooltipMixin);
  let subject = TooltipObject.create();
  assert.ok(subject);
});
