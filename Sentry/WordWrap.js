function add_underscores(raw, line_char_limit) {
	// —————————————————————————————————————————
	// 0. WHITESPACE NORMALIZATION:
	//
	//    1) Turn any literal “\t” or “\n” (backslash+t / backslash+n)
	//       into a space.
	//    2) Turn any actual tabs/newlines/etc. into a space.
	//    3) Collapse runs of spaces to a single space and trim.
	raw = raw
		// literal backslash + t / backslash + n
		.replace(/\\[tn]/g, " ")
		// any real whitespace (tabs, newlines, returns…)
		.replace(/\s+/g, " ")
		.trim();
	// —————————————————————————————————————————

	// 1. Now normalize hyphens (collapse any whitespace around them):
	const normalized = raw.replace(/\s*-\s*/g, "-");

	// 2. Split on single spaces (we know all whitespace is now just “ ”):
	const tokens = normalized.length ? normalized.split(" ") : [];

	const result = [];
	let lineWords = [];
	let lineLenSum = 0;

	// can this word fit on the current line?
	function canFit(w) {
		if (lineWords.length === 0) {
			return w.length <= line_char_limit;
		}
		// we need at least one underscore per gap:
		return lineLenSum + w.length + lineWords.length <= line_char_limit;
	}

	// format a finished line:
	function formatLine(arr) {
		const sumLen = arr.reduce((s, w) => s + w.length, 0);

		// SINGLE word → center it
		if (arr.length === 1) {
			const totalUnd = line_char_limit - sumLen;
			const left = Math.floor(totalUnd / 2);
			const right = totalUnd - left;
			return "_".repeat(left) + arr[0] + "_".repeat(right);
		}

		// MULTI-word → distribute underscores evenly
		const slots = arr.length - 1;
		const totalUnd = line_char_limit - sumLen;
		const each = Math.floor(totalUnd / slots);
		const extra = totalUnd - each * slots;
		const sep = "_".repeat(each);
		// join and tack on leftover at end
		return arr.join(sep) + "_".repeat(extra);
	}

	while (tokens.length) {
		const w = tokens.shift();

		if (canFit(w)) {
			lineWords.push(w);
			lineLenSum += w.length;
			continue;
		}

		// if it's a hyphenated word we can split:
		if (w.includes("-")) {
			const idx = w.indexOf("-");
			const prefix = w.slice(0, idx + 1); // e.g. "auto-"
			const suffix = w.slice(idx + 1); // e.g. "complete"

			if (prefix.length <= line_char_limit && canFit(prefix)) {
				// put prefix on this line
				lineWords.push(prefix);
				lineLenSum += prefix.length;
				// re-insert remainder to tokens
				tokens.unshift(suffix);
				// flush
				result.push(formatLine(lineWords));
				lineWords = [];
				lineLenSum = 0;
				continue;
			}
		}

		// otherwise flush current line, then retry this word on a fresh line
		if (lineWords.length) {
			result.push(formatLine(lineWords));
			lineWords = [];
			lineLenSum = 0;
		}
		tokens.unshift(w);
	}

	// flush last line
	if (lineWords.length) {
		result.push(formatLine(lineWords));
	}

	return result;
}

// ——— Examples ———
console.log(add_underscores("cat \tis an  \n animal and    so is a   dog", 12));
// → [ "cat__is__an_", "animal___and", "so_is_a_dog_" ]

console.log(add_underscores("auto  - \t complete is my go  -    to", 8));
// → [ "_auto-__", "complete", "is____my", "_go-to__" ]
