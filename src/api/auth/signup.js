import instance from '../index'

export default async function signup(email, password) {
	return await instance.post('/user/signup', {
		email: email,
		password: password,
	})
}
