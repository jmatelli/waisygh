'use strict';

import Story from './story.object';

export default {
  method: 'GET',
  path: '/stories/{id}',
  handler: (req, res) => {
    return Story.get(req.params.id)
      .then(story => res(story).code(200))
    ;
  }
};
