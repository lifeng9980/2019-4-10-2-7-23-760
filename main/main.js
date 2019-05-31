module.exports = function main(inputs) {		
	var price = null;
	var distance = inputs.distance;
	var parkTime = inputs.parkTime;
	var parkCharge = parkTime * 0.25;
	if (distance <= 2){
		price = 6 + parkCharge;
	}
	else if (distance > 2 && distance <= 8){
		price = 6 + (distance - 2) * 0.8 + parkCharge;
	}
	else {
		price = 10.8 + (distance - 8) * 0.8 * 1.5 + parkCharge;
	}
	return Math.round(price);
};