function find_fraudulent_merchants(non_fraud_codes, fraud_codes, mcc_thresholds, merchant_mcc_map, min_charges, charges) {
	// Write your code here
	const fraudCodes = new Set(fraud_codes.split(",").map((code) => code.trim()));

	const mccThresholds = {};
	mcc_thresholds.forEach((entry) => {
		const [mcc, threshold] = entry.split(",");
		mccThresholds[mcc.trim()] = parseFloat(threshold.trim());
	});

	const merchantMCCMap = {};
	merchant_mcc_map.forEach((entry) => {
		const [accountId, mcc] = entry.split(",");
		merchantMCCMap[accountId.trim()] = mcc.trim();
	});

	const minCharges = parseInt(min_charges.trim(), 10);

	const merchantStats = {};
	const chargeMap = {};

	charges.forEach((entry) => {
		const [type, chargeId, accountId, amount, code] = entry.split(",");

		if (type == "CHARGE") {
			if (!merchantStats[accountId]) {
				merchantStats[accountId] = { totalCharges: 0, fraudulentCharges: 0, isFraudulent: false };
			}

			merchantStats[accountId].totalCharges++;
			chargeMap[chargeId] = { accountId, isFraudulent: fraudCodes.has(code.trim()) };

			if (chargeMap[chargeId].isFraudulent) {
				merchantStats[accountId].fraudulentCharges++;
			}
		} else if (type == "DISPUTE") {
			const charge = chargeMap[chargeId];
			if (charge && charge.isFraudulent) {
				merchantStats[charge.accountId].fraudulentCharges--;
				charge.isFraudulent = false;
			}
		}

		Object.keys(merchantStats).forEach((accountId) => {
			const stats = merchantStats[accountId];
			if (stats.totalCharges >= minCharges) {
				const mcc = merchantMCCMap[accountId];
				const threshold = mccThresholds[mcc];

				if (Number.isInteger(threshold)) {
					if (stats.fraudulentCharges >= threshold) {
						stats.isFraudulent = true;
					}
				} else {
					const fraudRatio = stats.fraudulentCharges / stats.totalCharges;
					if (fraudRatio >= threshold) {
						stats.isFraudulent = true;
					}
				}
			}
		});
	});

	const fraudulentMerchants = Object.keys(merchantStats)
		.filter((accountId) => merchantStats[accountId].isFraudulent)
		.sort();

	return fraudulentMerchants.join(",");
}
