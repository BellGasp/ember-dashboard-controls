import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('dashhead-title', 'Integration | Component | Dashhead Title', {
  integration: true
});

test('it renders using the inline syntax', function(assert) {
  assert.expect(1);

  this.render(hbs`{{base/db-dashhead/dashhead-title}}`);

  assert.equal(this.$('h3.dashhead-title').length, 1);
});

test('it renders using the block syntax', function(assert) {
  assert.expect(2);

  this.render(hbs`
    {{#base/db-dashhead/dashhead-title}}
      Block Text
    {{/base/db-dashhead/dashhead-title}}
  `);

  assert.equal(this.$('h3.dashhead-title').length, 1);
  assert.equal(this.$('h3.dashhead-title').text().trim(), 'Block Text');
});
