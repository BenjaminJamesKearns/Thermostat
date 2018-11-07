'use strict';

describe('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('temperature start at 20', function() {
    expect(thermostat.currentTemperature()).toEqual(thermostat.DEFAULT_TEMPERATURE);
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

  it('power saving mode is on', function() {
    expect(thermostat.isPowerSavingModeOn()).toBe(true)
  });

  it('can turn power saving mode off and on', function() {
    thermostat.turnPowerSavingModeOff()
    expect(thermostat.isPowerSavingModeOn()).toBe(false)
    thermostat.turnPowerSavingModeOn()
    expect(thermostat.isPowerSavingModeOn()).toBe(true)
  });

  it('can be reset to default temperature', function() {
    thermostat.up(10)
    thermostat.resetTemperature()
    expect(thermostat.currentTemperature()).toEqual(thermostat.DEFAULT_TEMPERATURE)
  });
  describe('when power saving mode is on', function() {

    it('has a maximum temperature of 25 degrees', function() {
      thermostat.up(6)
      expect(thermostat.currentTemperature()).toEqual(25)
    });

  });

  describe('when power saving mode is off', function() {

    it('has a maximum temperature of 32 degrees', function() {
      thermostat.turnPowerSavingModeOff()
      thermostat.up(13)
      expect(thermostat.currentTemperature()).toEqual(32)
    });

  });

  describe('displaying usage levels', function() {

    it('low usage (< 18)', function() {
      thermostat.down(3)
      expect(thermostat.energyUsage()).toEqual('low-usage')
    });

    it('medium usage (< 25)', function() {
      expect(thermostat.energyUsage()).toEqual('medium-usage')
    });

    it('high usage (> 24)', function() {
      thermostat.up(5)
      expect(thermostat.energyUsage()).toEqual('high-usage')
    });
  });

});
