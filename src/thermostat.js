function Thermostat(){
this.temperature = 20;
this.isPowerSaverOn = true;
this.maximumTemperature = 25;
this.minimumTemperature = 10;
};

Thermostat.prototype.increaseTemperature = function() {
	if(this.temperature === this.maximumTemperature)
		this.increaseTemperatureBy(0);
	else 
		return this.increaseTemperatureBy(1);
};

Thermostat.prototype.increaseTemperatureBy = function(degrees) {
	this.temperature += degrees
};

Thermostat.prototype.decreaseTemperature = function() {
	if(this.temperature === this.minimumTemperature)
		this.decreaseTemperatureBy(0);
	else
		return this.decreaseTemperatureBy(1);
};

Thermostat.prototype.decreaseTemperatureBy = function(degrees) {
	return this.temperature -= degrees
};

Thermostat.prototype.resetTemperature = function() {
	return this.temperature = 20;
};

Thermostat.prototype.powerSaverOff = function() {
	this.maximumTemperature = 32;
	 return this.isPowerSaverOn = false;
};

Thermostat.prototype.powerSaverOn = function() {
	return this.isPowerSaverOn = true;
};