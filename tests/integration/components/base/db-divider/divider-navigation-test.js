import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('divider-navigation', 'Integration | Component | Divider Navigation', {
  integration: true
});

test('it renders as an inline component', function(assert) {
  assert.expect(1);

  this.render(hbs`{{base/db-divider/divider-navigation}}`);

  assert.equal(this.$('ul.nav.nav-pills.hr-divider-content.hr-divider-nav').length, 1);
});

test('it renders as a block component', function(assert) {
  assert.expect(1);

  this.render(hbs`
    {{#base/db-divider/divider-navigation}}
      Block Text
    {{/base/db-divider/divider-navigation}}
  `);

  assert.equal(this.$().text().trim(), 'Block Text');
});

test('it yields the item component', function(assert) {
  assert.expect(1);

  this.render(hbs`
    {{#base/db-divider/divider-navigation as |nav|}}
      {{nav.item}}
    {{/base/db-divider/divider-navigation}}
  `);

  assert.equal(this.$('li.nav-item').length, 1);
});

test('it is possible to build a navigation with items using both item styles', function(assert) {
  assert.expect(3);

  this.render(hbs`
    {{#base/db-divider/divider-navigation as |nav|}}
      {{nav.item destination="index" label="Index"}}

      {{#nav.item destination="index"}}
        Index
      {{/nav.item}}
    {{/base/db-divider/divider-navigation}}
  `);

  assert.equal(this.$('li.nav-item').length, 2);
  assert.equal(this.$('li.nav-item:eq(0) > a.nav-link').text().trim(), 'Index');
  assert.equal(this.$('li.nav-item:eq(1) > a.nav-link').text().trim(), 'Index');
});
