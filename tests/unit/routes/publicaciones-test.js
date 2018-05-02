import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | publicaciones', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:publicaciones');
    assert.ok(route);
  });
});
