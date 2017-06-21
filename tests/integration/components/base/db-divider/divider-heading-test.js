import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('divider-heading', 'Integration | Component | Divider Heading', {
  integration: true
});

test('it renders as an inline component', function(assert) {
  assert.expect(1);

  this.render(hbs`{{base/db-divider/divider-heading}}`);

  assert.equal(this.$('h3.hr-divider-content.hr-divider-heading').length, 1);
});

test('it renders as a block component', function(assert) {
  assert.expect(2);

  this.render(hbs`
    {{#base/db-divider/divider-heading}}
      Block Text
    {{/base/db-divider/divider-heading}}
  `);

  assert.equal(this.$('h3.hr-divider-content.hr-divider-heading').length, 1);
  assert.equal(this.$('h3.hr-divider-content.hr-divider-heading').text().trim(), 'Block Text');
});
