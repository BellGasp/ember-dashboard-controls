import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('iconav-items', 'Integration | Component | Icon Navigation Items', {
  integration: true
});

test('it renders using the block syntax', function(assert) {
  assert.expect(3);

  this.render(hbs`
    {{#base/db-iconav/iconav-items}}
      Block Text
    {{/base/db-iconav/iconav-items}}
  `);

  assert.equal(this.$('div.iconav-slider').length, 1);
  assert.equal(this.$('ul.nav.nav-pills.iconav-nav.flex-md-column').length, 1);
  assert.equal(this.$().text().trim(), 'Block Text');
});

test('it yields the item component', function(assert) {
  assert.expect(1);

  this.render(hbs`
    {{#base/db-iconav/iconav-items as |items|}}
      {{items.item}}
      {{items.item}}
      {{items.item}}
    {{/base/db-iconav/iconav-items}}
  `);

  // 4 items are present because of the hack needed to circumvent the
  // bug affecting the first navigation item when it becomes active
  assert.equal(this.$('li.nav-item').length, 4);
});

test('it yields the action component', function(assert) {
  assert.expect(1);

  this.render(hbs`
    {{#base/db-iconav/iconav-items as |items|}}
      {{items.action}}
      {{items.action}}
      {{items.action}}
    {{/base/db-iconav/iconav-items}}
  `);

  // 4 items are present because of the hack needed to circumvent the
  // bug affecting the first navigation item when it becomes active
  assert.equal(this.$('li.nav-item').length, 4);
});

test('it yields the action component', function(assert) {
  assert.expect(1);

  this.set('stubAction', () => assert.ok(true));

  this.render(hbs`
    {{#base/db-iconav/iconav-items as |items|}}
      {{items.action onClick=stubAction}}
    {{/base/db-iconav/iconav-items}}
  `);

  this.$('li.nav-item:eq(1)').click();
});
