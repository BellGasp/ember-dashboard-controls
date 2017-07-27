import Ember from 'ember';

const { on, observer, run: { schedule } } = Ember

export default Ember.Mixin.create({
  initTooltip: on('didInsertElement', observer('title', function () {
    schedule('afterRender', this, () => {
      this.$('[data-toggle="tooltip"]').tooltip('dispose').tooltip();
    });
  })),
});
