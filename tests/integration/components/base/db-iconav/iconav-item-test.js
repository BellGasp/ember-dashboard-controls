import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('iconav-item', 'Integration | Component | Icon Navigation Item', {
  integration: true
});

test('it renders using the inline syntax', function(assert) {
  assert.expect(4);

  this.render(hbs`{{base/db-iconav/iconav-item}}`);

  assert.equal(this.$('li.nav-item').length, 1);
  assert.equal(this.$('li > a.nav-link').length, 1);
  assert.equal(this.$('li > a > span').length, 1);
  assert.equal(this.$('li > a > small.iconav-nav-label.hidden-md-up').length, 1);
});

test('it binds the icon property', function(assert) {
  assert.expect(1);

  this.render(hbs`{{base/db-iconav/iconav-item icon="icon icon-home"}}`);

  assert.equal(this.$('li > a > span.icon.icon-home').length, 1);
});

test('it binds the label property', function(assert) {
  assert.expect(1);

  this.render(hbs`{{base/db-iconav/iconav-item label="Home"}}`);

  assert.equal(this.$('.iconav-nav-label').text().trim(), "Home");
});
