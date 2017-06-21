import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('db-divider', 'Integration | Component | Divider', {
  integration: true
});

test('it renders as an inline component w/o arguments', function(assert) {
  assert.expect(1);

  this.render(hbs`{{db-divider}}`);

  assert.equal(this.$('div.hr-divider').length, 1);
});

test('it renders as an inline component /w \'text\' argument', function(assert) {
  assert.expect(3);

  this.render(hbs`{{db-divider text="Divider Heading"}}`);

  assert.equal(this.$('div.hr-divider').length, 1);
  assert.equal(this.$('div.hr-divider > h3').length, 1);
  assert.equal(this.$('h3').text().trim(), 'Divider Heading');
});

test('it renders as a block component', function(assert) {
  assert.expect(1);

  this.render(hbs`
    {{#db-divider}}
      Block Text
    {{/db-divider}}
  `);

  assert.equal(this.$().text().trim(), 'Block Text');
});

test('it yields the navigation component when using the block syntax', function(assert) {
  assert.expect(1);

  this.render(hbs`
    {{#db-divider as |divider|}}
      {{#divider.navigation as |nav|}}
      {{/divider.navigation}}
    {{/db-divider}}
  `);

  assert.equal(this.$('ul.nav').length, 1);
});

test('it is possible to create a divider with navigation', function(assert) {
  assert.expect(5);

  this.render(hbs`
    {{#db-divider as |divider|}}
      {{#divider.navigation as |nav|}}
        {{nav.item destination="index" label="Index"}}
        {{nav.item destination="profile" label="Profile"}}
        {{nav.item destination="champ" label="Champ"}}
      {{/divider.navigation}}
    {{/db-divider}}
  `);

  assert.equal(this.$('ul.nav').length, 1);
  assert.equal(this.$('li.nav-item').length, 3);

  assert.equal(this.$('li.nav-item:eq(0)').text().trim(), 'Index');
  assert.equal(this.$('li.nav-item:eq(1)').text().trim(), 'Profile');
  assert.equal(this.$('li.nav-item:eq(2)').text().trim(), 'Champ');
});
