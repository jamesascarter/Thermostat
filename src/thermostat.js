function Thermostat(){
this.temperature = 20;
this.isPowerSaverOn = true;
};

Thermostat.prototype.increaseTemperature = function() {
	this.temperature = this.temperature + 1
};

Thermostat.prototype.increaseTemperatureBy = function(degrees) {
	// body...
};