import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('dashhead-subtitle', 'Integration | Component | Dashhead Subtitle', {
  integration: true
});

test('it renders using the inline syntax', function(assert) {
  assert.expect(1);

  this.render(hbs`{{base/db-dashhead/dashhead-subtitle}}`);

  assert.equal(this.$('h6.dashhead-subtitle').length, 1);
});

test('it renders using the block syntax', function(assert) {
  assert.expect(2);

  this.render(hbs`
    {{#base/db-dashhead/dashhead-subtitle}}
      Block Text
    {{/base/db-dashhead/dashhead-subtitle}}
  `);

  assert.equal(this.$('h6.dashhead-subtitle').length, 1);
  assert.equal(this.$('h6.dashhead-subtitle').text().trim(), 'Block Text');
});
