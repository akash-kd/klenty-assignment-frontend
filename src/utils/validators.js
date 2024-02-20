// Email validator
export const validateEmail = (email) => {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
	return emailRegex.test(email)
}

// Password validator
export const validatePassword = (password) => {
	const minLength = 8
	return password.length >= minLength
}

// Name validator
export const validateName = (name) => {
	const minNameLength = 2
	return name.length >= minNameLength
}
