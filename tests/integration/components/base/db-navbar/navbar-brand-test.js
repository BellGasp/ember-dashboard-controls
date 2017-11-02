import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('base/db-navbar/navbar-brand', 'Integration | Component | base/db navbar/navbar brand', {
  integration: true
});

test('it has the appropriate classes', function(assert) {
  assert.expect(1);

  this.render(hbs`{{base/db-navbar/navbar-brand}}`);

  assert.equal(this.$('a.navbar-brand').length, 1);
});

test('it yields its content', function(assert) {
  assert.expect(2);

  this.render(hbs`
    {{#base/db-navbar/navbar-brand}}
      yielded content
    {{/base/db-navbar/navbar-brand}}
  `);

  assert.equal(this.$('a.navbar-brand').length, 1);
  assert.equal(this.$('a.navbar-brand').text().trim(), 'yielded content');
});
