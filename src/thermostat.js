'use strict';

function Thermostat() {
  this.temperature = 20
}

Thermostat.prototype.currentTemperature = function() {
  return this.temperature
}

Thermostat.prototype.up = function(number) {
  this.temperature += number
}

Thermostat.prototype.down = function(number) {
  this.temperature -= number
}
