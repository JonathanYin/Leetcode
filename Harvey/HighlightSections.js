/**
 * Highlights text in the response that matches any of the sources.
 * @param response - The original text response.
 * @param sources - An array of strings to highlight within the response.
 * @returns The modified response with highlighted text.
 */
function highlightText(response, sources) {
	if (!response || !Array.isArray(sources) || sources.length === 0) return response;

	const words = response.split(" ");
	// Process sources into arrays of words, sort descending by word count for longer matches first
	const sourceWordLists = sources
		.filter((s) => s && s.trim().length > 0)
		.map((s) => s.split(" "))
		.sort((a, b) => b.length - a.length);

	// Find all match intervals: [startIdx, endIdxExclusive]
	let intervals = [];
	for (const srcWords of sourceWordLists) {
		const m = srcWords.length;
		if (m === 0) continue;
		for (let i = 0; i <= words.length - m; ++i) {
			let matches = true;
			for (let j = 0; j < m; ++j) {
				if (words[i + j] !== srcWords[j]) {
					matches = false;
					break;
				}
			}
			if (matches) {
				intervals.push([i, i + m]);
			}
		}
	}

	if (intervals.length === 0) return response;

	// Merge overlapping/adjacent intervals
	intervals.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
	const merged = [];
	for (const [start, end] of intervals) {
		if (
			merged.length > 0 &&
			merged[merged.length - 1][1] >= start // overlapping or adjacent
		) {
			merged[merged.length - 1][1] = Math.max(merged[merged.length - 1][1], end);
		} else {
			merged.push([start, end]);
		}
	}

	// Reconstruct result with <yellow> tags
	const result = [];
	let w = 0; // word index
	let k = 0; // interval index
	while (w < words.length) {
		if (k < merged.length && w === merged[k][0]) {
			result.push("<yellow>");
		}
		result.push(words[w]);
		if (k < merged.length && w + 1 === merged[k][1]) {
			result.push("</yellow>");
			k += 1;
		}
		w += 1;
	}

	return result.join(" ");
}
