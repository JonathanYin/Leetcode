/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
	// convert to set
	let wordSet = new Set(wordList);

	// if endWord is not in the set, impossible to reach
	if (!wordSet.has(endWord)) return 0;

	// queue for BFS, initialized with beginWord and a step count of 1
	let queue = [[beginWord, 1]];

	while (queue.length > 0) {
		let [currentWord, steps] = queue.shift();

		// try every possible single-letter transformation
		for (let i = 0; i < currentWord.length; i++) {
			for (let char = 97; char <= 122; char++) {
				// 'a' to 'z'
				let newWord = currentWord.slice(0, i) + String.fromCharCode(char) + currentWord.slice(i + 1);

				// if the new word is the endWord, return steps + 1
				if (newWord === endWord) {
					return steps + 1;
				}

				// if the new word is in the wordSet, add it to the queue and remove it from the set
				if (wordSet.has(newWord)) {
					queue.push([newWord, steps + 1]);
					wordSet.delete(newWord); // remove to avoid revisiting
				}
			}
		}
	}

	// if the queue is empty and no transformation was found
	return 0;
};
