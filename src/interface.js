$(document).ready(function() {

	var thermostat = new Thermostat;

$('.increase_temp').on('click', function() {
	$('.thermostat h1').text(thermostat.increaseTemperature());

});

});