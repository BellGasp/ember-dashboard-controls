import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('core/nav-item', 'Integration | Component | Nav Item', {
  integration: true
});


test('it renders as an inline component w/o arguments', function(assert) {
  assert.expect(2);

  this.render(hbs`{{core/nav-item}}`);

  assert.equal(this.$('li.nav-item').length, 1);
  assert.equal(this.$('li.nav-item > a.nav-link').length, 0);
});

test('it renders as a block component w/o arguments', function(assert) {
  assert.expect(2);

  this.render(hbs`
    {{#core/nav-item}}
    {{/core/nav-item}}
  `);

  assert.equal(this.$('li.nav-item').length, 1);
  assert.equal(this.$('li.nav-item > a.nav-link').length, 0);
});

test('it renders as an inline component /w destination', function(assert) {
  assert.expect(3);

  this.render(hbs`{{core/nav-item destination="index"}}`);

  assert.equal(this.$('li.nav-item').length, 1);
  assert.equal(this.$('li.nav-item > a.nav-link').length, 1);
  assert.equal(this.$('li.nav-item > a.nav-link').text().trim(), '');
});

test('it renders as a block component /w destination', function(assert) {
  assert.expect(3);

  this.render(hbs`
    {{#core/nav-item destination="index"}}
      Index
    {{/core/nav-item}}
  `);

  assert.equal(this.$('li.nav-item').length, 1);
  assert.equal(this.$('li.nav-item > a.nav-link').length, 1);
  assert.equal(this.$('li.nav-item > a.nav-link').text().trim(), 'Index');
});

test('it renders as an inline component /w destination', function(assert) {
  assert.expect(3);

  this.render(hbs`{{core/nav-item destination="index" label="Index"}}`);

  assert.equal(this.$('li.nav-item').length, 1);
  assert.equal(this.$('li.nav-item > a.nav-link').length, 1);
  assert.equal(this.$('li.nav-item > a.nav-link').text().trim(), 'Index');
});
