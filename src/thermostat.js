'use strict';

function Thermostat() {
  this.temperature = 20
  this.MINIMUM_TEMPERATURE = 10
}

Thermostat.prototype.currentTemperature = function() {
  return this.temperature
}

Thermostat.prototype.up = function(number) {
  this.temperature += number
}

Thermostat.prototype.down = function(number) {
  this.temperature -= number
  if (this.temperature < this.MINIMUM_TEMPERATURE) {
    this.temperature = this.MINIMUM_TEMPERATURE
  }
}

Thermostat.prototype.isMinimumTemperature = function() {
  return this.temperature === this.MINIMUM_TEMPERATURE
}
