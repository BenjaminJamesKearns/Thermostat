'use strict';

function Thermostat() {
  this.MINIMUM_TEMPERATURE = 10
  this.powerSavingMode = true
  this.MAXIMUM_TEMP_PSM_ON = 25
  this.MAXIMUM_TEMP_PSM_OFF = 32
  this.DEFAULT_TEMPERATURE = 20
  this.temperature = this.DEFAULT_TEMPERATURE
  this.LOW_ENERGY_LIMIT = 18
  this.MEDIUM_ENERGY_LIMIT = 25
}

Thermostat.prototype.currentTemperature = function() {
  return this.temperature
}

Thermostat.prototype.up = function(number = 1) {
  this.temperature += number
  this.checkNotOverMaximumTemperature()
}

Thermostat.prototype.down = function(number) {
  this.temperature -= number
  this.checkNotUnderMinimumTemperature()
}

Thermostat.prototype.isMinimumTemperature = function() {
  return this.temperature === this.MINIMUM_TEMPERATURE
}

Thermostat.prototype.isPowerSavingModeOn = function() {
  return this.powerSavingMode === true
}

Thermostat.prototype.turnPowerSavingModeOff = function() {
  this.powerSavingMode = false
}

Thermostat.prototype.turnPowerSavingModeOn = function() {
  this.powerSavingMode = true
}

Thermostat.prototype.checkNotOverMaximumTemperature = function() {
  if (this.isPowerSavingModeOn() === true) {
    if (this.temperature > this.MAXIMUM_TEMP_PSM_ON) {
      this.temperature = this.MAXIMUM_TEMP_PSM_ON
    }
  }
  if (this.temperature > this.MAXIMUM_TEMP_PSM_OFF) {
    this.temperature = this.MAXIMUM_TEMP_PSM_OFF
  }
}

Thermostat.prototype.checkNotUnderMinimumTemperature = function() {
  if (this.temperature < this.MINIMUM_TEMPERATURE) {
    this.temperature = this.MINIMUM_TEMPERATURE
  }
}

Thermostat.prototype.resetTemperature = function() {
  this.temperature = this.DEFAULT_TEMPERATURE
}

Thermostat.prototype.energyUsage = function() {
  if (this.temperature < this.LOW_ENERGY_LIMIT) {
    return 'low-usage'
  }
  if (this.temperature < this.MEDIUM_ENERGY_LIMIT) {
    return 'medium-usage'
  }
  return 'high-usage'
}
