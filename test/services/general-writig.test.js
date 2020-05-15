const assert = require('assert');
const app = require('../../src/app');

describe('\'generalWritig\' service', () => {
  it('registered the service', () => {
    const service = app.service('general-writig');

    assert.ok(service, 'Registered the service');
  });
});
