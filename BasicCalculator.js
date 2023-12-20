/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
	let sign = 1;
	let sum = 0;
	let stack = [];

	for (let i = 0; i < s.length; i++) {
		// if the current character is a digit
		if (s[i] >= "0" && s[i] <= "9") {
			let num = 0;
			// get the full number
			while (i < s.length && s[i] >= "0" && s[i] <= "9") {
				num = num * 10 + parseInt(s[i]);
				i++;
			}
			// add the number to the sum
			sum += sign * num;
			// decrement i because the for loop will increment it
			i--;
		} else if (s[i] == "+") {
			// set sign to positive
			sign = 1;
		} else if (s[i] == "-") {
			// set sign to negative
			sign = -1;
		}
		// calculate the sum within the parentheses
		else if (s[i] == "(") {
			// add current sum and sign to stack
			stack.push(sum);
			stack.push(sign);
			// reset sum and sign
			sum = 0;
			sign = 1;
		}
		// after calculating the sum within the parentheses
		else if (s[i] == ")") {
			// pop the sign and multiply it with the current sum
			sum = stack.pop() * sum;
			// add the sum before the parentheses to the current sum
			sum += stack.pop();
		}
	}
	return sum;
};
