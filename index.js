'use strict';

var Gpio = require('pigpio').Gpio
var Raspi = require("raspi-io");
var five = require("johnny-five");
var pixel = require("./lib/pixel.js");

var dataPin = new Gpio(17, {mode: Gpio.OUTPUT})

const board = new five.Board({
        io: new Raspi(),
});


board.on("ready", function() {
  strip = new pixel.Strip({
    data: dataPin,
    length: 144, // number of pixels in the strip.
    board: this,
    controller: "FIRMATA"
  });


  strip.on("ready", function() {
        console.log("Strip ready, let's go");
    });

});
