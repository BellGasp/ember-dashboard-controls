import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('base/db-navbar/navbar-toggler', 'Integration | Component | base/db navbar/navbar toggler', {
  integration: true
});

test('it renders as an inline component', function(assert) {
  assert.expect(1);

  this.render(hbs`{{base/db-navbar/navbar-toggler}}`);

  assert.equal(this.$('button.db-navbar-toggler > span.navbar-toggler-icon').length, 1);
});

test('it yields its content', function(assert) {
  assert.expect(1);

  this.render(hbs`
    {{#base/db-navbar/navbar-toggler}}
      yielded content
    {{/base/db-navbar/navbar-toggler}}
  `);

  assert.equal(this.$('button.db-navbar-toggler').text().trim(), 'yielded content');
});
