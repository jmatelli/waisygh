'use strict';

import User from './user.object';
import Promise from 'bluebird';

export default {
  method: 'POST',
  path: '/api/users',
  handler: (req, res) => {
    var user = new User();
    return user
      .import(req.payload)
      .call('save')
      .then(function(user) {
        res(user).code(200);
      })
    ;
  }
};
