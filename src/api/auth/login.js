import instance from '../index'

export default async function login(email, password) {
	return await instance.post('/user/login', {
		email: email,
		password: password,
	})
}
