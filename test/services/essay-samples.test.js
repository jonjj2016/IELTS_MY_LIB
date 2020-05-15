const assert = require('assert');
const app = require('../../src/app');

describe('\'essaySamples\' service', () => {
  it('registered the service', () => {
    const service = app.service('essay-samples');

    assert.ok(service, 'Registered the service');
  });
});
