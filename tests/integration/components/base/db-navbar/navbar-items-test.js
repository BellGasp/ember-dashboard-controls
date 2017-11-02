import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('base/db-navbar/navbar-items', 'Integration | Component | base/db navbar/navbar items', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);

  this.render(hbs`
    {{#base/db-navbar/navbar-items}}
      yielded content
    {{/base/db-navbar/navbar-items}}
  `);

  assert.equal(this.$('div.db-navbar-items.collapse.navbar-collapse.mr-auto').text().trim(), 'yielded content');
});
