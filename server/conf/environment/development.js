'use strict';

export default {
  env: 'development',
  host: 'localhost',
  elastic: {
    host: 'http://localhost:9200',
    index: 'waisygh',
  },
  staticPath: 'client',
  jwt: {
    secret: 'Michael Jackson isn\'t really dead, you know?'
  }
};
