import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('db-nav-bordered', 'Integration | Component | Nav Bordered', {
  integration: true
});

test('it renders as an inline component', function(assert) {
  assert.expect(1);

  this.render(hbs`{{db-nav-bordered}}`);

  assert.equal(this.$('ul.nav.nav-bordered').length, 1);
});

test('it renders as a block component', function(assert) {
  assert.expect(2);

  this.render(hbs`
    {{#db-nav-bordered}}
      Block Text
    {{/db-nav-bordered}}
  `);

  assert.equal(this.$('ul.nav.nav-bordered').length, 1);
  assert.equal(this.$('ul.nav.nav-bordered').text().trim(), 'Block Text');
});

test('it yields the item component', function(assert) {
  assert.expect(1);

  this.render(hbs`
    {{#db-nav-bordered as |nav|}}
      {{nav.item}}
    {{/db-nav-bordered}}
  `);

  assert.equal(this.$('li.nav-item').length, 1);
});

test('it is possible to build a navigation with items using both item styles', function(assert) {
  assert.expect(3);

  this.render(hbs`
    {{#db-nav-bordered as |nav|}}
      {{nav.item destination="index" label="Index"}}

      {{#nav.item destination="index"}}
        Index
      {{/nav.item}}
    {{/db-nav-bordered}}
  `);

  assert.equal(this.$('li.nav-item').length, 2);
  assert.equal(this.$('li.nav-item:eq(0) > a.nav-link').text().trim(), 'Index');
  assert.equal(this.$('li.nav-item:eq(1) > a.nav-link').text().trim(), 'Index');
});
