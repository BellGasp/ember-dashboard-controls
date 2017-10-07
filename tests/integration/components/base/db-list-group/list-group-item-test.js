import { run } from '@ember/runloop';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('list-group-item', 'Integration | Component | List Group Item', {
  integration: true
});

test('it renders as an inline component', function(assert) {
  assert.expect(1);

  this.render(hbs`{{base/db-list-group/list-group-item}}`);

  assert.equal(this.$('li.list-group-item').text().trim(), '');
});

test('it renders as a block component', function(assert) {
  assert.expect(1);

  this.render(hbs`
    {{#base/db-list-group/list-group-item}}
      text
    {{/base/db-list-group/list-group-item}}
  `);

  assert.equal(this.$('li.list-group-item').text().trim(), 'text');
});

test('it displays the text when using the inline component declaration', function(assert) {
  assert.expect(1);

  this.render(hbs`{{base/db-list-group/list-group-item text="text"}}`);

  assert.equal(this.$('li.list-group-item').text().trim(), 'text');
});

test('it displays and ', function(assert) {
  assert.expect(6);

  this.set('progress', 25);

  this.render(hbs`{{base/db-list-group/list-group-item progress=progress}}`);

  assert.equal(this.$('span.list-group-progress').length, 1);
  assert.equal(this.$('span.list-group-progress').attr('style'), 'width: 25%;');

  run(() => this.set('progress', 50));

  assert.equal(this.$('span.list-group-progress').attr('style'), 'width: 50%;');

  run(() => this.set('progress', null));

  assert.equal(this.$('span.list-group-progress').length, 0);

  run(() => this.set('progress', 'string'));

  assert.equal(this.$('span.list-group-progress').length, 0);

  run(() => this.set('progress', true));

  assert.equal(this.$('span.list-group-progress').length, 0);
});
