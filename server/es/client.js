'use strict';

import elasticsearch from 'elasticsearch';
import conf from '../conf/environment';
import Bluebird from 'bluebird';

const client = new elasticsearch.Client({
  host: conf.elastic.host,
  index: conf.elastic.host
});

export default client;
