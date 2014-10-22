describe('Thermostat', function(){

	var thermostat;

	beforeEach(function() {
		thermostat = new Thermostat
	});

	describe('by default', function(){

		it('is set to 20 degrees', function(){
			expect(thermostat.temperature).toEqual(20)
		});

		it('is set to power saving mode', function(){
			expect(thermostat.isPowerSaverOn).toBe(true);
		});

		it('can increase the temp. by one degree', function(){
			thermostat.increaseTemperature();
			expect(thermostat.temperature).toEqual(21);
		});

		it('can decrease the temp. by one degree', function(){
			thermostat.decreaseTemperature();
			expect(thermostat.temperature).toEqual(19);
		});

		it("should have a maximum temperature of 32", function(){
			expect(thermostat.maximumTemperature).toEqual(32)
		});

		it("should not be able to increase more than 32", function(){
			thermostat.increaseTemperatureBy(12)
			thermostat.increaseTemperature();
			expect(thermostat.temperature).toEqual(32)
		});

		it("should not be able to decrease more than 10 degrees", function(){
			thermostat.decreaseTemperatureBy(10)
			thermostat.decreaseTemperature();
			expect(thermostat.temperature).toEqual(10)
		});

	});

	describe('custom options', function(){
		it('can increase the temp by 12', function(){
			thermostat.increaseTemperatureBy(12);
			expect(thermostat.temperature).toEqual(32);

		});

		it('can decrease the temp by 8', function(){
			thermostat.decreaseTemperatureBy(8);
			expect(thermostat.temperature).toEqual(12);

		});

	});

});