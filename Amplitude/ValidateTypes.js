function validate(employees, schema) {
	// Build quick lookup for the "employee" schema
	if (!schema || !Array.isArray(schema.employee)) {
		throw new Error("Invalid schema");
	}
	const employeeSchema = schema.employee;
	const allowedProps = new Set(employeeSchema.map((f) => f.name));
	const schemaByProp = Object.fromEntries(employeeSchema.map((f) => [f.name, f]));

	// Primitive type check helpers
	const isPrimitiveTypeOk = (val, t) => {
		if (t === "string") return typeof val === "string";
		if (t === "number") return typeof val === "number";
		if (t === "boolean") return typeof val === "boolean";
		return false;
	};

	// Core validator for a single employee object
	function validateEmployee(obj) {
		// 1) Required checks in schema order
		for (const field of employeeSchema) {
			if (field.required && !Object.prototype.hasOwnProperty.call(obj, field.name)) {
				return { ok: false, message: `${field.name} is required` };
			}
		}

		// 2) Type checks for present props that are in the schema
		for (const field of employeeSchema) {
			if (!Object.prototype.hasOwnProperty.call(obj, field.name)) continue;
			const value = obj[field.name];
			const typeSpec = field.type;

			if (typeSpec.startsWith("array:")) {
				const subType = typeSpec.split(":")[1]; // expected "employee"
				if (!Array.isArray(value)) {
					return { ok: false, message: `type ${typeSpec} expected for ${field.name}` };
				}
				if (subType === "employee") {
					for (const child of value) {
						// Each child must be a valid employee object
						if (typeof child !== "object" || child === null || Array.isArray(child)) {
							return { ok: false, message: `type employee expected for ${field.name}` };
						}
						const result = validateEmployee(child);
						if (!result.ok) return result; // bubble first nested error
					}
				} else {
					// (If ever extended for arrays of primitives)
					for (const el of value) {
						if (!isPrimitiveTypeOk(el, subType)) {
							return { ok: false, message: `type ${typeSpec} expected for ${field.name}` };
						}
					}
				}
			} else {
				// Primitive property
				if (!isPrimitiveTypeOk(value, typeSpec)) {
					return { ok: false, message: `type ${typeSpec} expected for ${field.name}` };
				}
			}
		}

		// 3) Unexpected property check
		for (const key of Object.keys(obj)) {
			if (!allowedProps.has(key)) {
				return { ok: false, message: `unexpected property ${key}` };
			}
		}

		return { ok: true, message: "success" };
	}

	// Top-level must be an array of employees per the problem statement
	if (!Array.isArray(employees)) {
		// Not specified, but safest to surface a type error on the root “employees” list:
		return { ok: false, message: "type array:employee expected for employees" };
	}

	for (const emp of employees) {
		// Validate each top-level employee
		if (typeof emp !== "object" || emp === null || Array.isArray(emp)) {
			return { ok: false, message: "type employee expected for employees" };
		}
		const res = validateEmployee(emp);
		if (!res.ok) return res; // stop at first error
	}

	return { ok: true, message: "success" };
}
