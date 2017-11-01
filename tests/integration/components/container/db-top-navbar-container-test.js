import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('db-top-navbar-container', 'Integration | Component | Top Navbar Container', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);

  this.render(hbs`{{db-top-navbar-container}}`);

  assert.equal(this.$('div.with-top-navbar').length, 1);
});

test('it renders', function(assert) {
  assert.expect(2);

  this.render(hbs`
    {{#db-top-navbar-container}}
      yielded content
    {{/db-top-navbar-container}}
  `);

  assert.equal(this.$('div.with-top-navbar').length, 1);
  assert.equal(this.$('div.with-top-navbar').text().trim(), 'yielded content');
});
