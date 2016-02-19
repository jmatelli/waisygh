'use strict';

import esObject from 'esobject';
import client from '../../es/client';
import conf from '../../conf/environment';
import path from 'path';
import bcrypt from 'bcrypt';

var object = esObject.create({
  db: {
    client: client,
    index: conf.elastic.index,
    type: 'story',
  },
  mapping: path.join(__dirname, 'story.mapping.yaml'),
  import: {
    title: {$id: true},
    summary: {$id: true},
    authors: {$id: true},
    _version: (esval, rawval) => {
      return rawval || 0;
    },
  },
  export: {
    _id: {$id: true},
    _version: {$id: true},
  },
});

export default object;
