// Initializes the `generalWritig` service on path `/general-writig`
const {
    GeneralWritig
} = require('./general-writing.class');
const createModel = require('../../models/general-writig.model');
const hooks = require('./general-writing.hooks');

module.exports = function(app) {
    const options = {
        Model: createModel(app),
        paginate: app.get('paginate')
    };

    // Initialize our service with any options it requires
    app.use('/general-writig', new GeneralWritig(options, app));

    // Get our initialized service so that we can register hooks
    const service = app.service('general-writig');

    service.hooks(hooks);
};