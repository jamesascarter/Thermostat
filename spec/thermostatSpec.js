describe('Thermostat', function(){

	var thermostat;

	describe('by default', function(){

		it('is set to 20 degrees', function(){
			thermostat = new Thermostat();
			expect(thermostat.temperature).toEqual(20)
		});

		it('is set to power saving mode', function(){
			expect(thermostat.isPowerSaverOn).toBe(true);
		});

		it('can increase the temp. by one degree', function(){
			thermostat.increaseTemperature();
			expect(thermostat.temperature).toEqual(21);
		});
	});

	describe('custom options', function(){
		it('can increase the temp by 12', function(){
			thermostat.increaseTemperatureBy(12);
			expect(thermostat.temperature).toEqual(32);

		});
	});

});