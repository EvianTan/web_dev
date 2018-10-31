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
	},

	words: function(string) {
		let words = string.split(' ');
		return words;
	},

	pad: function(string, length) {
		if (length <= string.length) {
			return string;
		}
		var startPaddingLength = Math.floor((length - string.length)/2);
		var endPaddingLength = length - string.length - startPaddingLength;
		var paddedString = ' '.repeat(startPaddingLength) + string + ' '.repeat(endPaddingLength);
		return paddedString;
	},

	has: function(object, key) {
		var hasValue = key in object;
		return hasValue;
	},

	invert: function(object) {
		var invertedObject = {};
		for (var key in object) {
			var originalValue = object[key];
			invertedObject[originalValue] = key;
		}
		return invertedObject;
	},

	findkey: function(object, predicate) {
		for (var key in object) {
			var value = object[key];
			var predicateReturnValue = predicate(value);
			if (predicateReturnValue === true) {
				return key;
			}
		}
		return undefined;
	},

	drop: function(array, n) {
		if (n === undefined) {
			n = 1;
		}
		var droppedArray = array.slice(n);
		return droppedArray;
	},

	dropWhile: function(array, predicate) {
		var dropNumber = findIndex(array);
		findIndex(callback(element, index))

	},

	chunk: function(array, size) {
		if (size === undefined) {
			size = 1;
		}
		var arrayChunks = [];
		for (var i = 0; i < array.length; i += size) {
			var arrayChunk = array.slice(i, i+size);
			arrayChunks.push(arrayChunk);
		}
		return arrayChunks;
	}
};


// Do not write or modify code below this line.
module.exports = _;