// Initializes the `essayQuestions` service on path `/essay-questions`
const { EssayQuestions } = require('./essay-questions.class');
const createModel = require('../../models/essay-questions.model');
const hooks = require('./essay-questions.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/essay-questions', new EssayQuestions(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('essay-questions');

  service.hooks(hooks);
};
