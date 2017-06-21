import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('db-list-group', 'Integration | Component | List Group', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);

  this.render(hbs`{{db-list-group}}`);

  assert.equal(this.$('ul.list-group').length, 1);
});

test('it renders as a block component', function(assert) {
  assert.expect(2);

  this.render(hbs`
    {{#db-list-group}}
      Block Text
    {{/db-list-group}}
  `);

  assert.equal(this.$('ul.list-group').length, 1);
  assert.equal(this.$('ul.list-group').text().trim(), 'Block Text');
});

test('it yields the list group header component', function(assert) {
  assert.expect(2);

  this.render(hbs`
    {{#db-list-group as |lg|}}
      {{lg.header}}
    {{/db-list-group}}
  `);

  assert.equal(this.$('ul.list-group').length, 1);
  assert.equal(this.$('li.list-group-header').length, 1);
});

test('it yields the list group item component', function(assert) {
  assert.expect(2);

  this.render(hbs`
    {{#db-list-group as |lg|}}
      {{lg.item}}
    {{/db-list-group}}
  `);

  assert.equal(this.$('ul.list-group').length, 1);
  assert.equal(this.$('li.list-group-item').length, 1);
});

test('it is possible to create a full list group using the component', function(assert) {
  assert.expect(9);

  this.render(hbs`
    {{#db-list-group as |lg|}}
      {{lg.header text="Header"}}
      {{lg.item class="item-1" text="text 1" progress=25}}
      {{#lg.item class="item-2" progress=33}}
        text 2
      {{/lg.item}}
    {{/db-list-group}}
  `);

  assert.equal(this.$('ul.list-group').length, 1);
  assert.equal(this.$('ul.list-group > li.list-group-header').text().trim(), 'Header');

  assert.equal(this.$('li.list-group-item').length, 2);

  assert.equal(this.$('ul.list-group > li.list-group-item.item-1').length, 1);
  assert.equal(this.$('ul.list-group > li.list-group-item.item-1').text().trim(), 'text 1');
  assert.equal(this.$('.item-1 > span.list-group-progress').attr('style'), 'width: 25%;');

  assert.equal(this.$('ul.list-group > li.list-group-item.item-2').length, 1);
  assert.equal(this.$('ul.list-group > li.list-group-item.item-2').text().trim(), 'text 2');
  assert.equal(this.$('.item-2 > span.list-group-progress').attr('style'), 'width: 33%;');
});
