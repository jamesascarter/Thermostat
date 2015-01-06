$(document).ready(function() {

	var thermostat = new Thermostat;

$('.increase_temp').on('click', function() {
	$('.thermostat h1').text(thermostat.increaseTemperature());
});

$('.decrease_temp').on('click', function() {
	$('.thermostat h1').text(thermostat.decreaseTemperature());
});

$('.reset_temp').on('click', function() {
	$('.thermostat h1').text(thermostat.resetTemperature());
});

$('.power_saver_off').on('click', function() {
	$('.thermostat h2').text(thermostat.powerSaverOff());
});

$('.power_saver_on').on('click', function() {
	$('.thermostat h2').text(thermostat.powerSaverOn());
});


});