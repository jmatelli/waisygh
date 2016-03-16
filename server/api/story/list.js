'use strict';

import Promise from 'bluebird';

import Story from './story.object';

export default {
  method: 'GET',
  path: '/stories',
  handler: (request, reply) => {
    return Story.search({
      from: +request.query.from || undefined,
      size: +request.query.size || undefined,
    })
      .then(stories => {
        reply(stories.elements)
          .code(200)
          .header('Accept-Ranges', 'users')
          .header('Content-Range', `users ${request.query.from}-${request.query.from + request.query.size}/${stories.total}`)
        ;
      })
    ;
  }
};
