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
      .then(res => {
        return Promise.props({
          total: res.total,
          elements: Promise.map(res.elements, val => val.export()),
        })
      })
      .then(stories => res(stories).code(200))
    ;
  }
};
