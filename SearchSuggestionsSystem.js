/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function (products, searchWord) {
	// sort lexicographically
	products.sort();

	// output array
	let output = [];

	// current string we are searching for
	let str = "";

	// iterate through each char of searchWord one by one
	for (let c of searchWord) {
		let arr = [];

		// add current char to string for searching
		str += c;

		for (let i = 0; i < products.length; i++) {
			// if string has common prefix
			if (products[i].indexOf(str) == 0) {
				arr.push(products[i]);
			}

			// at most three products
			if (arr.length == 3) {
				break;
			}
		}

		output.push(arr);
	}

	return output;
};
