import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('db-dashhead', 'Integration | Component | Dashhead', {
  integration: true
});

test('it renders as an inline component', function(assert) {
  assert.expect(1);

  this.render(hbs`{{db-dashhead}}`);

  assert.equal(this.$('div.dashhead').length, 1);
});

test('it renders as a block component', function(assert) {
  assert.expect(2);

  this.render(hbs`
    {{#db-dashhead}}
      Block Text
    {{/db-dashhead}}
  `);

  assert.equal(this.$('div.dashhead').length, 1);
  assert.equal(this.$('div.dashhead').text().trim(), 'Block Text');
});

test('it yields the titles component', function(assert) {
  assert.expect(2);

  this.render(hbs`
    {{#db-dashhead as |dashhead|}}
      {{#dashhead.titles}}
      {{/dashhead.titles}}
    {{/db-dashhead}}
  `);

  assert.equal(this.$('div.dashhead').length, 1);
  assert.equal(this.$('div.dashhead-titles').length, 1);
});

test('it yields the toolbar component', function(assert) {
  assert.expect(2);

  this.render(hbs`
    {{#db-dashhead as |dashhead|}}
      {{#dashhead.toolbar}}
      {{/dashhead.toolbar}}
    {{/db-dashhead}}
  `);

  assert.equal(this.$('div.dashhead').length, 1);
  assert.equal(this.$('div.dashhead-toolbar').length, 1);
});

test('it is possible to define the titles section using the yielded component', function(assert) {
  assert.expect(6);

  this.render(hbs`
    {{#db-dashhead as |dashhead|}}
      {{#dashhead.titles as |titles|}}
        {{#titles.title}}Example Title{{/titles.title}}
        {{#titles.subtitle}}Example Subtitle{{/titles.subtitle}}
      {{/dashhead.titles}}
    {{/db-dashhead}}
  `);

  assert.equal(this.$('div.dashhead').length, 1);

  assert.equal(this.$('div.dashhead-titles').length, 1);

  assert.equal(this.$('h3.dashhead-title').length, 1);
  assert.equal(this.$('h3.dashhead-title').text().trim(), 'Example Title');

  assert.equal(this.$('h6.dashhead-subtitle').length, 1);
  assert.equal(this.$('h6.dashhead-subtitle').text().trim(), 'Example Subtitle');
});
