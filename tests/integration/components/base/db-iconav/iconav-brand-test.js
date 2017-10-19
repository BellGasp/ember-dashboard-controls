import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('iconav-brand', 'Integration | Component | Icon Navigation Brand', {
  integration: true
});

test('it renders using the inline syntax', function(assert) {
  assert.expect(2);

  this.render(hbs`{{base/db-iconav/iconav-brand}}`);

  assert.equal(this.$('a.iconav-brand').length, 1);
  assert.equal(this.$('span.iconav-brand-icon').length, 1);
});

test('it renders using the block syntax', function(assert) {
  assert.expect(1);

  this.render(hbs`
    {{#base/db-iconav/iconav-brand}}
      <div class="inside"></div>
    {{/base/db-iconav/iconav-brand}}
  `);

  assert.equal(this.$('a.iconav-brand .inside').length, 1);
});

test('it binds the icon property', function(assert) {
  assert.expect(1);

  this.render(hbs`{{base/db-iconav/iconav-brand icon="icon icon-home"}}`);

  assert.equal(this.$('span.iconav-brand-icon.icon.icon-home').length, 1);
});

test('it binds the title property', function(assert) {
  assert.expect(1);

  this.render(hbs`{{base/db-iconav/iconav-action title="Home"}}`);

  assert.equal(this.$('.nav-link').attr('data-original-title'), "Home");
});
