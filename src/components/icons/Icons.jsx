export function CharmSearch(props) {
	return (
		<div className='bg-white h-full aspect-square flex justify-center items-center border-l-2 border-t-2 border-b-2 rounded-l-full focus:border-black'>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='1em'
				height='1em'
				viewBox='0 0 16 16'
				{...props}
			>
				<g
					fill='none'
					stroke='#888888'
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth='1.5'
				>
					<path d='m11.25 11.25l3 3'></path>
					<circle cx='7.5' cy='7.5' r='4.75'></circle>
				</g>
			</svg>
		</div>
	)
}

export function CharmGitCompare(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			viewBox='0 0 16 16'
			className='fill-white stroke-white'
			{...props}
		>
			<g
				fill='none'
				stroke='#888888'
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth='1.5'
			>
				<circle cx='12.5' cy='12.5' r='1.75' stroke='white'></circle>
				<circle cx='3.5' cy='3.5' r='1.75' stroke='white'></circle>
				<path
					stroke='white'
					d='M3.75 5.75v5c0 1 .5 1.5 1.5 1.5h2m-.5 2l1.5-2l-1.5-2m5.5 0v-5c0-1-.5-1.5-1.5-1.5h-2m.5-2l-1.5 2l1.5 2'
				></path>
			</g>
		</svg>
	)
}

export function Right() {
	return (
		<div className='bg-white h-full aspect-square flex justify-center items-center border-r-2 border-t-2 border-b-2 rounded-r-full focus:border-black'></div>
	)
}

export function SearchIcon(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			viewBox='0 0 16 16'
			{...props}
		>
			<g
				fill='none'
				stroke='#888888'
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth='1.5'
			>
				<path d='m11.25 11.25l3 3' stroke='white'></path>
				<circle cx='7.5' cy='7.5' r='4.75' stroke='white'></circle>
			</g>
		</svg>
	)
}

export function CharmChevronRight(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			viewBox='0 0 16 16'
			{...props}
		>
			<path
				fill='none'
				stroke='white'
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth='2'
				d='M5.75 12.25L10.25 8l-4.5-4.25'
			></path>
		</svg>
	)
}

export function CharmMail(props) {
	return (
		<div className='bg-white h-full aspect-square flex justify-center items-center border-l-2 border-t-2 border-b-2 rounded-l-full focus:border-black'>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='1em'
				height='1em'
				viewBox='0 0 16 16'
				{...props}
			>
				<g
					fill='none'
					stroke='#888888'
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth='1.5'
				
				>
					<path d='M1.75 3.75h12.5v9.5H1.75z'></path>
					<path d='m2.25 4.25l5.75 5l5.75-5'></path>
				</g>
			</svg>
		</div>
	)
}


export function CharmPadlock(props) {
	return (
		<div className='bg-white h-full aspect-square flex justify-center items-center border-l-2 border-t-2 border-b-2 rounded-l-full focus:border-black'>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='1em'
				height='1em'
				viewBox='0 0 16 16'
				{...props}
			>
				<path
					fill='none'
					stroke='#888888'
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth='1.5'
					d='M2.75 6.75h10.5v7.5H2.75zm2-.5s-1-4.5 3.25-4.5s3.25 4.5 3.25 4.5'
				></path>
			</svg>
		</div>
	)
}


export function CharmStar(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			viewBox='0 0 16 16'
			{...props}
		>
			<path
				className="hover:fill-gray-900"
				fill='none'
				stroke='#111827'
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth='2'
				d='m8 1.75l-2.25 4l-4 .5l3 3.5l-1 4.5l4.25-2l4.25 2l-1-4.5l3-3.5l-4-.5z'
			></path>
		</svg>
	)
}

const Icons = {
	CharmSearch,
	CharmGitCompare,
	Right,
	SearchIcon,
	CharmChevronRight,
	CharmMail,
	CharmPadlock,
	CharmStar
}

export default Icons
