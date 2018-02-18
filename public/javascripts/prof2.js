var Particle = require('particle-api-js');
var particle = new Particle();

var authData = require("./authData.json");

var token = authData.token;
var devID = authData.devID;

var moment = require('moment');

var mongoose = require('mongoose');

var Positon = require('../../models/position');
var Run = require('../../models/run');

var userDevice = particle.getDevice({deviceID: devID, auth: token});

var eventRead = true;

// put this in an export function as data stream
function toggleEventStream(currentUser){

        eventRead = true;

        if (document.getElementById("startandstopbtn").textContent === "Stop"){
            var n_run = new Run({
                position: []
            });

            currentUser.runs.push(n_run);
        }

        particle.getEventStream({deviceID: devID, name:'location', auth: token}).then(
            function(stream){
                stream.on('event', function(e){
                    if (document.getElementById("startandstopbtn").textContent === "Stop"){
                        console.log(e);
                        var geoArr = JSON.parse("[" + e.data + "]");
                        var lt = geoArr[0];
                        var lg = geoArr[1];
                        var t = moment().format();

                        var pos = new Positon({
                            lat: lt,
                            lng: lg,
                            ts: t
                        });

                        currentUser.runs[runs.length-1].position.push(pos);

                    } else if (document.getElementById("startandstopbtn").textContent === "Start"){
                        eventRead = false;
                        return;
                    } else if (eventRead == false){
                        return;
                    }

                })
            })
}
