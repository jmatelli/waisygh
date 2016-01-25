'use strict';

import Hapi from 'hapi';
import Hoek from 'hoek';
import Inert from 'inert';
import good from 'good';
import goodConsole from 'good-console';
import goodFile from 'good-file';
import jwt from 'hapi-auth-jwt2';

import path from 'path';

import conf from './conf/environment';

import esInit from './es/init';

// routes
import user from './api/user';

const server = new Hapi.Server({
  connections: {
    routes: {
      files: {
        relativeTo: path.join(__dirname, '../client')
      }
    }
  }
});

server.connection({
  host: conf.host,
  port: conf.port
});

var goodOptions = {
  reporters: [
    {
      reporter: goodConsole,    // Log everything to console
      events: {log: '*', response: '*'}
    }
  ]
};

function validate() {

}

esInit()
  .then(() => {
    server.register(
      [
        Inert,
        // jwt,
        {
          register: good,
          options: goodOptions
        }
      ], (err) => {
        Hoek.assert(!err, err);

        // server.auth.strategy('jwt', 'jwt', {
        //   key: conf.jwt.secret,
        //   validateFunc: validate,
        //   verifyOptions: {algorithms: ['HS256']}
        // });
        //
        // server.auth.default('jwt');

        server.ext('onPreResponse', function (request, reply) {
          const response = request.response;

          if (!response.isBoom || request.route.settings.id !== 'statics') {
            return reply.continue();
          }

          return reply.file('index.html');
        });

        server.route({
          method: 'GET',
          path: '/{param*}',
          handler: {
            directory: {
              path: '.',
              lookupCompressed: true,
              redirectToSlash: false,
            }
          },
          config: {id: 'statics'}
        });

        server.route(user);

        server.start((err) => {
          Hoek.assert(!err, err);
          console.log('Server started at: ' + server.info.uri);
        });
      }
    );
  })
;
