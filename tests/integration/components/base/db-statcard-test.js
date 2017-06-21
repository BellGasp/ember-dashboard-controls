import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('db-statcard', 'Integration | Component | Statcard', {
  integration: true
});

test('it renders as an inline component', function(assert) {
  assert.expect(1);

  this.render(hbs`{{db-statcard}}`);

  assert.equal(this.$('div.statcard').length, 1);
});

test('it shows the value', function(assert) {
  assert.expect(1);

  this.render(hbs`{{db-statcard value="9001"}}`);

  assert.equal(this.$('h3.statcard-number').text().trim(), '9001');
});

test('it shows the description', function(assert) {
  assert.expect(1);

  this.render(hbs`{{db-statcard description="Power Level"}}`);

  assert.equal(this.$('span.statcard-desc').text().trim(), 'Power Level');
});

test('it shows the delta', function(assert) {
  assert.expect(1);

  this.render(hbs`{{db-statcard delta="5%"}}`);

  assert.equal(this.$('small.delta-indicator').text().trim(), '5%');
});
