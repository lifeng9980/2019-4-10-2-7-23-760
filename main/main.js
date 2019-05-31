module.exports = function main(inputs) {
		// write your code here...
		/* var price = null;
		var basePrice = 6;
		var baseDist1 = 2;
		var baseDist2 = 8;
		var distance = inputs.distance;
		var parkTime = inputs.parkTime;
		if (distance <=baseDist1){
			price = basePrice + parkTime * 0.25;
		}
		else if(distance >baseDist1 && distance <= baseDist2){
			price = basePrice + (distance - baseDist1) * 0.8 + parkTime * 0.25;
		}
		else{
			price = basePrice + (baseDist2 - baseDist1)* 0.8 + (distance - baseDist2) * 0.8 * 1.5 + parkTime * 0.25;
		}
		return Math.round(price); */
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