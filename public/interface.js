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
			if(parseInt($('.thermostat h1').text()) > 25)
        $('body').css('background-color', 'red');
      else if(parseInt($('.thermostat h1').text()) > 18)
        $('body').css('background-color', 'yellow');
      else
        $('body').css('background-color', 'green');
	});
};


$(document).ready(function() {

	var thermoview = new ThermostatView('.thermostat h1');

$('.power_saver_off').on('click', function() {
	$('.thermostat h2').text(thermoview.thermostat.powerSaverOff());
});

$('.power_saver_on').on('click', function() {
	$('.thermostat h2').text(thermoview.thermostat.powerSaverOn());
});

});


