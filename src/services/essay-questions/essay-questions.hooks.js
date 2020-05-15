const {
    authenticate
} = require('@feathersjs/authentication').hooks;

const log = require('../../hooks/log');

module.exports = {
    before: {
        all: [],
        find: [],
        get: [],
        create: [log()],
        update: [],
        patch: [log()],
        remove: [log()]
    },

    after: {
        all: [],
        find: [],
        get: [],
        create: [],
        update: [],
        patch: [],
        remove: []
    },

    error: {
        all: [],
        find: [],
        get: [],
        create: [],
        update: [],
        patch: [],
        remove: []
    }
};