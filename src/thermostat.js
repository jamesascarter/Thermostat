function Thermostat(){
this.temperature = 20;
this.isPowerSaverOn = true;
this.maximumTemperature = 32;
this.minimumTemperature = 10;
};

Thermostat.prototype.increaseTemperature = function() {
	if(this.temperature === this.maximumTemperature)
		this.increaseTemperatureBy(0);
	else 
		this.increaseTemperatureBy(1);
};

Thermostat.prototype.increaseTemperatureBy = function(degrees) {
	this.temperature += degrees
};

Thermostat.prototype.decreaseTemperature = function() {
	if(this.temperature === this.minimumTemperature)
		this.decreaseTemperatureBy(0);
	else
		this.decreaseTemperatureBy(1);
};

Thermostat.prototype.decreaseTemperatureBy = function(degrees) {
	this.temperature -= degrees
};