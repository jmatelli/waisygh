'use strict';

import Story from './story.object';
import Promise from 'bluebird';

export default {
  method: 'POST',
  path: '/stories',
  handler: (req, res) => {
    var story = new Story();
    return story
      .import(req.payload)
      .call('save')
      .then(story => res(story).code(200))
    ;
  }
};
