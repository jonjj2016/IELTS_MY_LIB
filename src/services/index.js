const users = require('./users/users.service.js');
const essayQuestions = require('./essay-questions/essay-questions.service.js');
const essaySamples = require('./essay-samples/essay-samples.service.js');
const generalWrintig = require('./general-writing/general-writing.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function(app) {
    app.configure(users);
    app.configure(essayQuestions);
    app.configure(essaySamples);
    app.configure(generalWrintig);
};