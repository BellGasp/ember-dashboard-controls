import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('db-with-top-navbar', 'Integration | Component | Top Navbar Container', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);

  this.render(hbs`{{db-with-top-navbar}}`);

  assert.equal(this.$('div.with-top-navbar').length, 1);
});

test('it renders', function(assert) {
  assert.expect(2);

  this.render(hbs`
    {{#db-with-top-navbar}}
      yielded content
    {{/db-with-top-navbar}}
  `);

  assert.equal(this.$('div.with-top-navbar').length, 1);
  assert.equal(this.$('div.with-top-navbar').text().trim(), 'yielded content');
});

test('it yields a fluid container', function(assert) {
  assert.expect(3);

  this.render(hbs`
    {{#db-with-top-navbar as |wrapper|}}
      {{#wrapper.container}}
      {{/wrapper.container}}
    {{/db-with-top-navbar}}
  `);

  assert.equal(this.$('div.with-top-navbar > div.db-container').length, 1);
  assert.equal(this.$('div.with-top-navbar > div.container-fluid').length, 1);
  assert.equal(this.$('div.with-top-navbar > div.container-fluid-spacious').length, 1);
});

test('it yields a navbar', function(assert) {
  assert.expect(1);

  this.render(hbs`
    {{#db-with-top-navbar as |wrapper|}}
      {{#wrapper.navbar}}
      {{/wrapper.navbar}}
    {{/db-with-top-navbar}}
  `);

  assert.equal(this.$('div.with-top-navbar > nav.db-navbar').length, 1);
});
