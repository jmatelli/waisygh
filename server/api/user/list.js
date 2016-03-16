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
      .then(users => {
        reply(users.elements)
          .code(200)
          .header('Accept-Ranges', 'users')
          .header('Content-Range', `users ${+request.query.from}-${+request.query.from + +request.query.size}/${users.total}`)
        ;
      })
    ;
  }
};
