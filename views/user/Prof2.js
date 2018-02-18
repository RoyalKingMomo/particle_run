var Particle = require('particle-api-js');
var particle = new Particle();

var authData = require("./authData.json");

var token = authData.token;
var devID = authData.devID;

var moment = require('moment');

var mongoose = require('mongoose');

var userDevice = particle.getDevice({deviceID: devID, auth: token});

var eventRead = true;

// put this in an export function as data stream
function startEventStream(UserID){

    eventRead = true;

    particle.getEventStream({deviceID: devID, name:'location', auth: token}).then(
        function(stream){
            stream.on('event', function(e){
                if (eventRead){
                    console.log(e);
                    var geoArr = JSON.parse("[" + e.data + "]");
                    var lt = geoArr[0];
                    var lg = geoArr[1];
                    var t = moment().format();

                    var obj = {
                        lat: lt,
                        lng; lg,
                        ts: t
                    };
                    


                } else {
                    // close mongo file
                    return;
                }

            })
        })
}

function stopEventStream(){
    eventRead = false;
}

startEventStream();
