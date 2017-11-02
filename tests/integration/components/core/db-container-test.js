import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('core/db-container', 'Integration | Component | core/db container', {
  integration: true
});

test('it yeilds its content', function(assert) {
  assert.expect(1);

  this.render(hbs`
    {{#core/db-container}}
      yielded content
    {{/core/db-container}}
  `);

  assert.equal(this.$('div.db-container').text().trim(), 'yielded content');
});

test('it can be basic', function(assert) {
  assert.expect(1);

  this.render(hbs`{{core/db-container}}`);

  assert.equal(this.$('.db-container.container').length, 1);
});

test('it can be fluid', function(assert) {
  assert.expect(1);

  this.render(hbs`{{core/db-container fluid=true}}`);

  assert.equal(this.$('.db-container.container-fluid').length, 1);
});

test('it can be spacious', function(assert) {
  assert.expect(1);

  this.render(hbs`{{core/db-container spacious=true}}`);

  assert.equal(this.$('.db-container.container-fluid-spacious').length, 1);
});
