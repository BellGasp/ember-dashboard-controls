import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('base/db-navbar/navbar-items/navbar-action', 'Integration | Component | base/db navbar/navbar items/navbar action', {
  integration: true
});

test('it yields its content and executes the provided action when clicked', function(assert) {
  assert.expect(2);

  this.set('action', () => assert.ok(true));

  this.render(hbs`
    {{#base/db-navbar/navbar-items/navbar-action onClick=(action action)}}
      yielded content
    {{/base/db-navbar/navbar-items/navbar-action}}
  `);

  this.$('span.nav-link').click();

  assert.equal(this.$('li.nav-item > span.nav-link').text().trim(), 'yielded content');
});
