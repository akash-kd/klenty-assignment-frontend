import Icons from '../../components/icons/Icons'
import SignupAPI from '../../api/auth/signup'
import { useState } from 'react'
import toast from 'react-hot-toast'
import {useNavigate} from 'react-router-dom'

import { validateEmail, validatePassword } from '../../utils/validators'
import { useUser } from '../../context/userContext'
export default function SignUp() {
	const [email, setEmail] = useState()
	const [pass1, setPass1] = useState()
	const [pass2, setPass2] = useState()
	const { updateUser } = useUser();
	const navigate = useNavigate()

	const onSubmit = () => {
		if (
			validateEmail(email) &&
			validatePassword(pass1) &&
			validatePassword(pass2) &&
			pass1 === pass2
		) {
			const res = SignupAPI(email, pass1)

			res.then((res) => {
				updateUser(
					res.data.data.user,
					res.data.data.accessToken,
					res.data.data.refreshToken,
				)
				toast.success('Signed Up Successfully')
				navigate('/')
			}).catch((err) => {
				toast.error(err.response.data.message)
			})
		} else if (pass1 !== pass2) {
			toast.error('Passwords does not match')
		} else {
			toast.error('Enter valid email, password')
		}
	}
	return (
		<div className='flex flex-col w-full h-full justify-center items-center'>
			<form className='flex flex-col w-1/3 justify-center items-start'>
				<label className='w-full text-center text-3xl mb-10 font-bold'>
					Sign Up
				</label>

				{/* Email Field	 */}
				<label className='w-full text-left'>Email</label>
				<div className='flex w-full justify-center items-center my-1 mb-6'>
					<Icons.CharmMail />
					<input
						onChange={(e) => setEmail(e.target.value)}
						placeholder='Enter email id'
						className='px-1 py-2 w-full outline-none border-t-2 border-b-2 font-semibold'
					/>
					<Icons.Right />
				</div>

				{/* Password1 Field */}
				<label className='w-full text-left'>Password</label>
				<div className='flex w-full justify-center items-center my-1'>
					<Icons.CharmPadlock />
					<input
						type='password'
						onChange={(e) => setPass1(e.target.value)}
						placeholder='Enter password'
						className='px-1 py-2 w-full outline-none border-t-2 border-b-2 font-semibold'
					/>
					<Icons.Right />
				</div>
				<span className='text-sm opacity-50'>
					Must contain more than 8 Characters
				</span>

				{/* Password2 Field */}
				<label className='w-full text-left mt-6'>
					Confirm Password
				</label>
				<div className='flex w-full justify-center items-center my-1 '>
					<Icons.CharmPadlock />
					<input
						type='password'
						onChange={(e) => setPass2(e.target.value)}
						placeholder='Confirm password'
						className='px-1 py-2 w-full outline-none border-t-2 border-b-2 font-semibold'
					/>
					<Icons.Right />
				</div>
				<span className='text-sm opacity-50'>
					Must contain more than 8 Characters
				</span>

				{/* Sign Up Button */}
				<div className='flex w-full justify-end items-center'>
					<button
						onClick={(e) => {
							e.preventDefault()
							onSubmit()
						}}
						type='submit'
						className='my-7 flex gap-2 items-center justify-center bg-black text-white px-5 py-2 rounded-full drop-shadow-md'
					>
						Sign Up
						<Icons.CharmChevronRight />
					</button>
				</div>
			</form>
		</div>
	)
}
