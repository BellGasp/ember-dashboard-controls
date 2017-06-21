import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('dashhead-toolbar', 'Integration | Component | Dashhead Toolbar', {
  integration: true
});

test('it renders as an inline component', function(assert) {
  assert.expect(1);

  this.render(hbs`{{base/db-dashhead/dashhead-toolbar}}`);

  assert.equal(this.$('div.dashhead-toolbar').length, 1);
});

test('it renders as a block component', function(assert) {
  assert.expect(2);

  this.render(hbs`
    {{#base/db-dashhead/dashhead-toolbar}}
      Block Text
    {{/base/db-dashhead/dashhead-toolbar}}
  `);

  assert.equal(this.$('div.dashhead-toolbar').length, 1);
  assert.equal(this.$('div.dashhead-toolbar').text().trim(), 'Block Text');
});

test('it yields the divider component', function(assert) {
  assert.expect(2);

  this.render(hbs`
    {{#base/db-dashhead/dashhead-toolbar as |toolbar|}}
      {{toolbar.divider}}
    {{/base/db-dashhead/dashhead-toolbar}}
  `);

  assert.equal(this.$('div.dashhead-toolbar').length, 1);
  assert.equal(this.$('span.dashhead-toolbar-divider').length, 1);
});
