import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('base/db-dashhead/dashhead-toolbar-divider', 'Integration | Component | base/db dashhead/dashhead toolbar divider', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1)

  this.render(hbs`{{base/db-dashhead/dashhead-toolbar-divider}}`);

  assert.equal(this.$('span.dashhead-toolbar-divider.hidden-xs').length, 1);
});
