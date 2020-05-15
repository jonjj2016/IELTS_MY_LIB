const assert = require('assert');
const app = require('../../src/app');

describe('\'essayQuestions\' service', () => {
  it('registered the service', () => {
    const service = app.service('essay-questions');

    assert.ok(service, 'Registered the service');
  });
});
