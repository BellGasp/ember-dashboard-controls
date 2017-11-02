import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('base/db-navbar/navbar-items/navbar-item', 'Integration | Component | base/db navbar/navbar items/navbar item', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);

  this.render(hbs`
    {{#base/db-navbar/navbar-items/navbar-item}}
      yielded content
    {{/base/db-navbar/navbar-items/navbar-item}}
  `);

  assert.equal(this.$('li.nav-item > a.nav-link').text().trim(), 'yielded content');
});
