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

  it('temperature decreased by 5', function() {
    thermostat.down(5)
    expect(thermostat.currentTemperature()).toEqual(15);
  });

});
