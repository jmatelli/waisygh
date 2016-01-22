# WAISYGH

**WAISYGH** stands for "What an incredible story you've got here!".

It's a web application that allows anyone to share their stories.

### Technology used
- Back
  - NodeJS
  - Hapi
  - Elasticsearch
- Front
  - AngularJS
- ES2015
- Webpack
- Gulp
- Babel

### To make it work on local
First, you need to get all the node modules :
```shell
$ npm i
```
Then, make sure elasticsearch is running :
```shell
$ curl http://localhost:9200
```
The command above, if elasticsearch is started, should return something like :
```shell
$ curl http://localhost:9200
{
  "name" : "Anelle",
  "cluster_name" : "elasticsearch",
  "version" : {
    "number" : "2.1.1",
    "build_hash" : "40e2c53a6b6c2972b3d13846e450e66f4375bd71",
    "build_timestamp" : "2015-12-15T13:05:55Z",
    "build_snapshot" : false,
    "lucene_version" : "5.3.1"
  },
  "tagline" : "You Know, for Search"
}
```
Then, you need to run two shell commands, the first one to build then watch the front repository `/client`, the second to launch the local server (you will need two different terminal to launch those commands) :
```shell
$ npm run front-watch
```
```shell
$ gulp serve
```
Finally, go to `http://localhost:9000/`
