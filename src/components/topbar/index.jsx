import Icons from '../../Icons'
export default function TopBar() {
	return (
		<div className='flex justify-end items-center w-full h-16 absolute top-0 px-10 gap-10 font-semibold text-gray-400'>
			<a
				href='/login'
				className='hover:text-black hover:underline underline-offset-8 underline-2'
			>
				Login
			</a>
			<a
				href='/signup'
				className='flex gap-2 items-center justify-center bg-black text-white px-4 py-1 rounded-full drop-shadow-md'
			>
				Sign Up
				<Icons.CharmChevronRight />
			</a>
		</div>
	)
}
