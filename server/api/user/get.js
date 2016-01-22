'use strict';

import User from './user.object';

export default {
  method: 'GET',
  path: '/api/users/{id}',
  handler: (req, res) => {
    return User.get(req.params.id)
      .then(function(user) {
        res(user).code(200);
      })
    ;
  }
};
