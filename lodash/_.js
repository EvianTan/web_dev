const _ = {
	clamp: function (number, lower, upper) {
		let lowerClampedValue = Math.max(number, lower);
		let clampedValue = Math.min(lowerClampedValue, upper);
		return clampedValue;
	},

	inRange: function(number, start, end) {
		if (end === undefined) {
			end = start;
			start = 0;
		}
		if (start > end) {
			var temp;
			temp = end;
			end = start;
			start = temp;
		}
		var isInRange;
		if (number < start) {
			isInRange = false;
		} else if (number >= end) {
			isInRange = false;
		} else if (number >= start && number < end) {
			isInRange = true;
		}
		return isInRange;
	}
};


// Do not write or modify code below this line.
module.exports = _;