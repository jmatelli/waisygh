'use strict';

import User from './user.object';

export default {
  method: 'GET',
  path: '/users/{id}',
  handler: (req, res) => {
    console.log('get story', req.params.id);
    return User.get(req.params.id)
      .then(user => res(user).code(200))
    ;
  }
};
