
function KitchenDevice() {
	var self = this;

	self.brandName = 'NoNameBrand';
	self.totalPrice = 20000;
}

KitchenDevice.prototype.setBrandName = function(value) {
	this.brandName = value;
}
KitchenDevice.prototype.getBrandName = function() {
	return this.brandName;
}

KitchenDevice.prototype.setTotalPrice = function(value) {
	this.totalPrice = value;
}

KitchenDevice.prototype.getTotalPrice = function() {
	return this.totalPrice;
}

//-------------------------------------------------------


function Teapot(volume) {
	var self = this;

	self.maxTemperature = 100;
	self.isTurnedOn = false;
}

Teapot.prototype = Object.create(KitchenDevice.prototype);
Teapot.prototype.constructor = Teapot;

Teapot.prototype.turnOn = function() {
	this.isTurnedOn = true;
}

Teapot.prototype.turnOff = function() {
	this.isTurnedOn = false;
}

Teapot.prototype.setMaxTemperature = function(value) {

	if (value < 0 || value > 100) {
		throw new Error('Invalid temperature data');
	}

	this.maxTemperature = value;
}

Teapot.prototype.getMaxTemperature = function() {
	return this.maxTemperature;
}

Teapot.prototype.isTurnedOnFn = function() {
	return this.isTurnedOn;
}


var tefal = new Teapot(2400);
var tefal2 = new Teapot(11111);
tefal.setBrandName('TestName');
console.log(tefal.getBrandName());
console.log(tefal.getTotalPrice());

console.log(tefal.isTurnedOnFn());

tefal.turnOn();

console.log(tefal.isTurnedOnFn());

console.log(tefal.getMaxTemperature());
tefal.setMaxTemperature(20);

console.log(tefal.getMaxTemperature());
//tefal.setMaxTemperature(200);

tefal.turnOff()
console.log(tefal.isTurnedOnFn());
