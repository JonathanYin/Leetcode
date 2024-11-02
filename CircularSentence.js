/**
 * @param {string} sentence
 * @return {boolean}
 */
var isCircularSentence = function (sentence) {
	sentence = sentence.split(" ");

	// first char of first word
	let firstChar = sentence[0].charAt(0);

	// last char of first word
	let lastChar = sentence[0].slice(-1);

	// if only one word, check if first and last chars are equal
	if (sentence.length === 1) {
		return firstChar == lastChar;
	}

	for (let i = 1; i < sentence.length; i++) {
		// if first char of current string does not equal last char of previous string
		if (sentence[i].charAt(0) != lastChar) {
			return false;
		}
		// update last char
		lastChar = sentence[i].slice(-1);
	}

	// check if last char of last word equals the first char of first word
	return sentence[sentence.length - 1].slice(-1) == firstChar;
};
