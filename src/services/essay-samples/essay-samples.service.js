// Initializes the `essaySamples` service on path `/essay-samples`
const { EssaySamples } = require('./essay-samples.class');
const createModel = require('../../models/essay-samples.model');
const hooks = require('./essay-samples.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/essay-samples', new EssaySamples(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('essay-samples');

  service.hooks(hooks);
};
