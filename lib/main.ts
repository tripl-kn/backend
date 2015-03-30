/// <reference path="../typings/hapi/hapi.d.ts" />
var Hapi = require('hapi');

var server = new Hapi.Server();
server.connection({ port: 3000 });

server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        reply('Hello, bemily!');
    }
});

server.start(function () {
    console.log('Server running at:', server.info.uri);
});
