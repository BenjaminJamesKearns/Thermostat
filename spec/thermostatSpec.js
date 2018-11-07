'use strict';

describe('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('temperature start at 20', function() {
    expect(thermostat.currentTemperature()).toEqual(20);
  });

  it('temperature increased by 5', function() {
    thermostat.up(5)
    expect(thermostat.currentTemperature()).toEqual(25);
  });

  it('temperature decreased by 9', function() {
    thermostat.down(9)
    expect(thermostat.currentTemperature()).toEqual(11);
  });

  it('has a minimum temperature of 10 degrees', function() {
    thermostat.down(11)
    expect(thermostat.currentTemperature()).toEqual(thermostat.MINIMUM_TEMPERATURE);
  });

  it('temperature is not at minimum', function() {
    expect(thermostat.isMinimumTemperature()).toBe(false);
  });

  it('temperature is at minimum', function() {
    thermostat.down(10)
    expect(thermostat.isMinimumTemperature()).toBe(true)
  });

});
