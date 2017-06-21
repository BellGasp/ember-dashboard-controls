import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('dashhead-titles', 'Integration | Component | Dashhead Titles', {
  integration: true
});

test('it renders using the inline syntax', function(assert) {
  assert.expect(1);

  this.render(hbs`{{base/db-dashhead/dashhead-titles}}`);

  assert.equal(this.$('div.dashhead-titles').length, 1);
});

test('it renders using the block syntax', function(assert) {
  assert.expect(2);

  this.render(hbs`
    {{#base/db-dashhead/dashhead-titles}}
      Block Text
    {{/base/db-dashhead/dashhead-titles}}
  `);

  assert.equal(this.$('div.dashhead-titles').length, 1);
  assert.equal(this.$('div.dashhead-titles').text().trim(), 'Block Text');
});

test('it yields the title component correctly', function(assert) {
  assert.expect(3);

  this.render(hbs`
    {{#base/db-dashhead/dashhead-titles as |titles|}}
      {{#titles.title}}Example Title{{/titles.title}}
    {{/base/db-dashhead/dashhead-titles}}
  `);

  assert.equal(this.$('div.dashhead-titles').length, 1);

  assert.equal(this.$('h3.dashhead-title').length, 1);
  assert.equal(this.$('h3.dashhead-title').text().trim(), 'Example Title');
});

test('it yields the subtitle component correctly', function(assert) {
  assert.expect(3);

  this.render(hbs`
    {{#base/db-dashhead/dashhead-titles as |titles|}}
      {{#titles.subtitle}}Example Subtitle{{/titles.subtitle}}
    {{/base/db-dashhead/dashhead-titles}}
  `);

  assert.equal(this.$('div.dashhead-titles').length, 1);

  assert.equal(this.$('h6.dashhead-subtitle').length, 1);
  assert.equal(this.$('h6.dashhead-subtitle').text().trim(), 'Example Subtitle');
});

test('it is possible to use both the yielded component at the same time', function(assert) {
  assert.expect(5);

  this.render(hbs`
    {{#base/db-dashhead/dashhead-titles as |titles|}}
      {{#titles.title}}Example Title{{/titles.title}}
      {{#titles.subtitle}}Example Subtitle{{/titles.subtitle}}
    {{/base/db-dashhead/dashhead-titles}}
  `);

  assert.equal(this.$('div.dashhead-titles').length, 1);

  assert.equal(this.$('h3.dashhead-title').length, 1);
  assert.equal(this.$('h3.dashhead-title').text().trim(), 'Example Title');

  assert.equal(this.$('h6.dashhead-subtitle').length, 1);
  assert.equal(this.$('h6.dashhead-subtitle').text().trim(), 'Example Subtitle');
});
