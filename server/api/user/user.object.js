'use strict';

import esObject from 'esobject';
import client from '../../es/client';
import conf from '../../conf/environment';
import path from 'path';
import bcrypt from 'bcrypt';

var object = esObject.create({
  db: {
    client: client,
    host: conf.elastic.host,
    index: conf.elastic.index,
    type: 'user',
  },
  mapping: path.join(__dirname, 'user.mapping.yaml'),
  import: {
    username: {$id: true},
    firstname: {$id: true},
    lastname: {$id: true},
    email: {$id: true},
    dob: {$id: true},
    password: (esval, rawval) => {
      return bcrypt.hashSync(rawval, 10);
    },
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
