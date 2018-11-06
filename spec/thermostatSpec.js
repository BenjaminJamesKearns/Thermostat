'use strict';

describe('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('temperature start at 20', function() {
    expect(thermostat.currentTemperature()).toEqual(20);
  });

});
