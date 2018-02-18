var Particle = require('particle-api-js');
var particle = new Particle();

var authData = require("./authData.json");

var token = authData.token;
var devID = authData.devID;

var userDevice = particle.getDevice({deviceID: devID, auth: token});

function startEventStream(){
    // put this in an export function as data stream
    particle.callFunction({deviceID: 'mine', name:'setEvent', argument:'true', auth: token});
    particle.getEventStream({deviceID: 'mine', name:'location', auth: token}).then(
        function(stream){
            stream.on('event', function(e){
                if (particle.getVariable({deviceID: 'mine', name:'event_Read', auth: token}) == true){
                    console.log(e);
                    // add stuff to mongo here
                } else {
                    // close mongo here
                    return;
                }

            });
        }
    );
}


function breakEventStream(){
    // put this in an export function as break
    particle.callFunction({deviceID: 'mine', name:'setEvent', argument:'false', auth: token});
}

startEventStream();
