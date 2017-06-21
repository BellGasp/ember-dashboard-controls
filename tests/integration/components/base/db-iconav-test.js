import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('db-iconav', 'Integration | Component | Icon Navigation', {
  integration: true
});

test('it renders as an inline component', function(assert) {
  assert.expect(1);

  this.render(hbs`{{db-iconav}}`);

  assert.equal(this.$('nav.iconav').length, 1);
});

test('it renders as a block component', function(assert) {
  assert.expect(2);

  this.render(hbs`
    {{#db-iconav}}
      Block Text
    {{/db-iconav}}
  `);

  assert.equal(this.$('nav.iconav').length, 1);
  assert.equal(this.$('nav.iconav').text().trim(), 'Block Text');
});

test('it yields the brand component', function(assert) {
  assert.expect(3);

  this.render(hbs`
    {{#db-iconav as |nav|}}
      {{nav.brand icon="icon icon-home"}}
    {{/db-iconav}}
  `);

  assert.equal(this.$('nav.iconav').length, 1);
  assert.equal(this.$('a.iconav-brand').length, 1);
  assert.equal(this.$('span.iconav-brand-icon.icon.icon-home').length, 1);
});

test('it yields the items component', function(assert) {
  assert.expect(2);

  this.render(hbs`
    {{#db-iconav as |nav|}}
      {{#nav.items}}
      {{/nav.items}}
    {{/db-iconav}}
  `);

  assert.equal(this.$('div.iconav-slider').length, 1);
  assert.equal(this.$('ul.nav.nav-pills.iconav-nav.flex-md-column').length, 1);
});

test('it is possible to use every component in order to create a menu', function(assert) {
  assert.expect(12);

  this.render(hbs`
    {{#db-iconav as |nav|}}
      {{nav.brand icon="icon icon-home"}}

      {{#nav.items as |items|}}
        {{items.item icon="icon icon-home" label="Home"}}
        {{items.item icon="icon icon-user" label="Profile"}}
        {{items.item icon="icon icon-gauge" label="Dashboard"}}
      {{/nav.items}}
    {{/db-iconav}}
  `);

  assert.equal(this.$('nav.iconav').length, 1);

  assert.equal(this.$('a.iconav-brand').length, 1);
  assert.equal(this.$('span.iconav-brand-icon.icon.icon-home').length, 1);

  assert.equal(this.$('div.iconav-slider').length, 1);
  assert.equal(this.$('ul.nav.nav-pills.iconav-nav.flex-md-column').length, 1);

  assert.equal(this.$('li.nav-item').length, 4);

  assert.equal(this.$('li.nav-item > a.nav-link > span.icon.icon-home').length, 1);
  assert.equal(this.$('li.nav-item > a.nav-link > span.icon.icon-user').length, 1);
  assert.equal(this.$('li.nav-item > a.nav-link > span.icon.icon-gauge').length, 1);

  assert.equal(this.$('li.nav-item:eq(1)').text().trim(), 'Home');
  assert.equal(this.$('li.nav-item:eq(2)').text().trim(), 'Profile');
  assert.equal(this.$('li.nav-item:eq(3)').text().trim(), 'Dashboard');
});
