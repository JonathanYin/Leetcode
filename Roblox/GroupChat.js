function solution(members, messages) {
	const mentionCounts = {};
	members.forEach((member) => (mentionCounts[member] = 0));

	messages.forEach((message) => {
		const mentions = message.match(/@[^@\s]+/g) || [];

		const mentionedUsers = new Set();

		mentions.forEach((mention) => {
			const ids = mention.slice(1).split(",");
			ids.forEach((id) => mentionedUsers.add(id));
		});

		mentionedUsers.forEach((user) => {
			if (mentionCounts.hasOwnProperty(user)) {
				mentionCounts[user]++;
			}
		});
	});

	return members
		.map((member) => `${member}=${mentionCounts[member]}`)
		.sort((a, b) => {
			const [memberA, countA] = a.split("=");
			const [memberB, countB] = b.split("=");

			const countDiff = Number(countB) - Number(countA);
			if (countDiff !== 0) return countDiff;

			return memberA.localeCompare(memberB);
		});
}
