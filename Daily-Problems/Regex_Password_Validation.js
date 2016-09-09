// completed 9-9-2016

// Regex Password Validation

// You need to write regex that will validate a password to make sure it meets the follwing criteria:

// At least six characters long
// contains a lowercase letter
// contains an uppercase letter
// contains a number
// Valid passwords will only be alphanumeric characters.

// Solution //

function validate(password) {
	// First use a positive look ahead for a digit to ensure that there is at least one digit.
	// Then do the same for lowercase and uppercase.
	// Finally make sure that the password is at least 6 characters long. 	
	return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{6,}$/.test(password);
}