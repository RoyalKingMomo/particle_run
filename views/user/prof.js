var Particle = require('particle-api-js');
var particle = new Particle();

var authData = require("./authData.json");

var token = authData.token;
var devID = authData.devID;

var userDevice = particle.getDevice({deviceID: devID, auth: token});

// put this in an export function as data stream
function startEventStream(){
    // call setEvent to set event_Read to true (1)
    particle.callFunction({deviceID: devID, name:'setEvent', argument:'true', auth: token}).then(
        function(data){
            console.log("Called succesfully with code" + data.body.return_value);
        }, function(err){
            console.error("Error code:" + err);
        }
    );

    // start event stream for location
    particle.getEventStream({deviceID: devID, name:'location', auth: token}).then(
        function(stream){
            stream.on('event', function(e){
                var eveRD = particle.getVariable({deviceID: devID, name:'event_Read', auth: token})
                eveRD.then(function(data){
                    if (data == 1){
                        console.log(e);
                        // mongo stuff here, plus handle e
                    } else {
                        // close mongo here
                        return;
                    }
                },
                function(err){
                    console.error(err);
                })
            })
        }
    )
}


function breakEventStream(){

    // break event stream on stop by setting the value to false
    particle.callFunction({deviceID: devID, name:'setEvent', argument:'false', auth: token}).then(
        function(data){
            console.log("Called succesfully with code" + data.body.return_value);
        }, function(err){
            console.error("Error code:" + err);
        }
    )

}

startEventStream();
