$(document).ready(function() {
  var thermostat = new Thermostat();
  $('#temperature').text('current temperature: ' + thermostat.temperature);
});

$('#temperature-up').on('click', function() {
  thermostat.up();
  $('#temperature').text('current temperature: ' + thermostat.temperature);
})
