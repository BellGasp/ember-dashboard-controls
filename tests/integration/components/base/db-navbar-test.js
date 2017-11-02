import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('db-navbar', 'Integration | Component | Navbar', {
  integration: true
});

test('it yeilds its content', function(assert) {
  assert.expect(1);

  this.render(hbs`
    {{#db-navbar}}
      yielded content
    {{/db-navbar}}
  `);

  assert.equal(this.$('nav.db-navbar.navbar.fixed-top.app-navbar').text().trim(), 'yielded content');
});

test('it has a default breakpoint: sm', function(assert) {
  assert.expect(1);

  this.render(hbs`{{db-navbar}}`);

  assert.equal(this.$('nav.navbar-toggleable-sm').length, 1);
});

test('it has an overrideable breakpoint', function(assert) {
  assert.expect(1);

  this.render(hbs`{{db-navbar breakpoint="md"}}`);

  assert.equal(this.$('nav.navbar-toggleable-md').length, 1);
});

test('it defaults to the default navbar color scheme', function(assert) {
  assert.expect(1);

  this.render(hbs`{{db-navbar}}`);

  assert.equal(this.$('nav.navbar-default').length, 1);
});

test('it is possible to use the inverse color scheme', function(assert) {
  assert.expect(1);

  this.render(hbs`{{db-navbar inverse=true}}`);

  assert.equal(this.$('nav.navbar-inverse').length, 1);
});

test('it yeilds the `brand` component', function(assert) {
  assert.expect(1);

  this.render(hbs`
    {{#db-navbar as |navbar|}}
      {{#navbar.brand}}
      {{/navbar.brand}}
    {{/db-navbar}}
  `);

  assert.equal(this.$('nav.db-navbar > a.navbar-brand').length, 1);
});

test('it yeilds the `toggler` component', function(assert) {
  assert.expect(1);

  this.render(hbs`
    {{#db-navbar as |navbar|}}
      {{#navbar.toggler}}
      {{/navbar.toggler}}
    {{/db-navbar}}
  `);

  assert.equal(this.$('nav.db-navbar > button.db-navbar-toggler').length, 1);
});

test('it yeilds the `items` component', function(assert) {
  assert.expect(1);

  this.render(hbs`
    {{#db-navbar as |navbar|}}
      {{#navbar.items}}
      {{/navbar.items}}
    {{/db-navbar}}
  `);

  assert.equal(this.$('nav.db-navbar > div.db-navbar-items').length, 1);
});
