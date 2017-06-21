import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('list-group-header', 'Integration | Component | List Group Header', {
  integration: true
});

test('it renders as an inline component', function(assert) {
  assert.expect(1);

  this.render(hbs`{{base/db-list-group/list-group-header}}`);

  assert.equal(this.$('li.list-group-header').text().trim(), '');
});

test('it renders as a block component', function(assert) {
  assert.expect(1);

  this.render(hbs`
    {{#base/db-list-group/list-group-header}}
      text
    {{/base/db-list-group/list-group-header}}
  `);

  assert.equal(this.$('li.list-group-header').text().trim(), 'text');
});

test('it displays the text when using the inline component declaration', function(assert) {
  assert.expect(1);

  this.render(hbs`{{base/db-list-group/list-group-header text="text"}}`);

  assert.equal(this.$('li.list-group-header').text().trim(), 'text');
});
