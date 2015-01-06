function ThermostatView(element) {
	this.el = $(element);
	this.thermostat = new Thermostat;
	this.el.text(this.thermostat.temperature);
	this.bindTo('.increase_temp', this.thermostat, this.thermostat.increaseTemperature);
	this.bindTo('.decrease_temp', this.thermostat, this.thermostat.decreaseTemperature);
	this.bindTo('.reset_temp', this.thermostat, this.thermostat.resetTemperature);
};

ThermostatView.prototype.bindTo = function(selector, obj, func) {
	$(selector).on('click', function() {
		$('.thermostat h1').text(func.call(obj));
	});
};


$(document).ready(function() {
	var thermoview = new ThermostatView('.thermostat h1');

// $.getJSON('http://www.myweather2.com/developer/forecast.ashx?uac=QHemb9MelK&output=json&query=SW1', function(data) {
// 	$('.outdoor_temperature h2').text(data['weather']['curren_weather'][0]['temp'])});


$('.power_saver_off').on('click', function() {
	$('.thermostat h2').text(thermoview.thermostat.powerSaverOff());
});

$('.power_saver_on').on('click', function() {
	$('.thermostat h2').text(thermoview.thermostat.powerSaverOn());
});

});


