'use strict';

const Hapi = require('hapi');
const AWS = require('aws-sdk');

// Create a server with a host and port
const server = Hapi.server({
    host: 'localhost',
    routes:{
         cors: true
    },
    port: 8001
});

// Add the route
server.route({
    method: 'GET',
    path:'/jane',
    handler: function (request, h) {

        return {
             "username":"jane",
             "name":"Jane Doe",
             "music":[
                  {
                       "title":"Track One",
                       "file":'414365__erokia__ambient-wave-28.wav'
                  },
                  {
                       "title":"Track Two",
                       "file":"414497__toiletrolltube__hellocatfood-b6b7-o.wav"
                  },
                  {
                       'title':"Track Three",
                       "file":'414514__eardeer__daybreak.wav'
                  }
             ]
        }

    }
});

// Start the server
async function start() {

    try {
        await server.start();
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }

    console.log('Server running at:', server.info.uri);
};

start();
