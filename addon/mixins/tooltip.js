import Mixin from '@ember/object/mixin';
import { on } from '@ember/object/evented';
import { observer } from '@ember/object';
import { schedule } from '@ember/runloop';

export default Mixin.create({
  initTooltip: on('didInsertElement', observer('title', function () {
    schedule('afterRender', this, () => {
      this.$('[data-toggle="tooltip"]').tooltip('dispose').tooltip();
    });
  })),
});
