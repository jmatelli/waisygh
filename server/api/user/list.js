'use strict';

import Promise from 'bluebird';

import User from './user.object';

export default {
  method: 'GET',
  path: '/users',
  handler: (request, reply) => {
    return User.search({
      from: +request.query.from || undefined,
      size: +request.query.size || undefined,
    })
      .then(res => {
        return Promise.props({
          total: res.total,
          elements: Promise.map(res, val => val.export()),
        })
      })
      .then(users => reply(users).code(200))
    ;
  }
};
