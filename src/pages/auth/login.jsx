import Icons from '../../components/icons/Icons'
import LoginAPI from '../../api/auth/login'
import { useState } from 'react'
import toast from 'react-hot-toast'

import { validateEmail, validatePassword } from '../../utils/validators'
import { useUser } from '../../context/userContext'
import { useNavigate } from 'react-router-dom'
export default function Login() {
	const { updateUser } = useUser()
	const [email, setEmail] = useState()
	const [pass, setPass] = useState()
	const navigate = useNavigate()

	const onSubmit = () => {
		if (validateEmail(email) && validatePassword(pass)) {
			const res = LoginAPI(email, pass)
			res.then((res) => {
				updateUser(
					res.data.data.user,
					res.data.data.accessToken,
					res.data.data.refreshToken,
				)
				toast.success('Logged In Successfully')
				navigate('/')
			}).catch((err) => {
				toast.error(err.response.data.message)
			})
		} else {
			toast.error('Enter valid email, password')
		}
	}

	return (
		<div className='flex flex-col w-full h-full justify-center items-center'>
			<form className='flex flex-col w-1/3 justify-center items-start'>
				<label className='w-full text-center text-3xl mb-10 font-bold'>
					Login
				</label>

				<label className='w-full text-left'>Email</label>
				<div className='flex w-full justify-center items-center my-1 mb-5'>
					<Icons.CharmMail />
					<input
						onChange={(e) => setEmail(e.target.value)}
						type='email'
						placeholder='Enter email id'
						className='px-1 py-2 w-full outline-none border-t-2 border-b-2 font-semibold'
					/>
					<Icons.Right />
				</div>

				<label className='w-full text-left'>Password</label>
				<div className='flex w-full justify-center items-center my-1'>
					<Icons.CharmPadlock />
					<input
						onChange={(e) => setPass(e.target.value)}
						type='password'
						placeholder='Enter password'
						className='px-1 py-2 w-full outline-none border-t-2 border-b-2 font-semibold'
					/>
					<Icons.Right />
				</div>

				<div className='flex w-full justify-end items-center'>
					<button
						onClick={(e) => {
							e.preventDefault()
							onSubmit()
						}}
						type='submit'
						className='my-7 flex gap-2 items-center justify-center bg-black text-white px-5 py-2 rounded-full drop-shadow-md'
					>
						Login
						<Icons.CharmChevronRight />
					</button>
				</div>
			</form>
		</div>
	)
}
