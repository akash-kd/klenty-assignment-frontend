import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Icons from './components/icons/Icons'
import Login from './pages/auth/login'
import Signup from './pages/auth/signup'
import { TypeAnimation } from 'react-type-animation'
import { useRef, useState } from 'react'
import { useUser } from './context/userContext'
import Search from './api/unsplash/search'
import { useImages } from './context/imagesContext'
import Main from './pages/main'
import { useNavigate } from 'react-router-dom'
import Favorites from './pages/favourites'

function TopBar() {
	const navigate = useNavigate()
	const aref = useRef()
	const { user, logout } = useUser()
	const { query, setQuery, addImages, getAllImages } = useImages()

	const onSearch = async () => {
		const res = await Search({ query: query, per_page: 20 })
		addImages(query, res.data.results)
	}

	const searchBar = (
		<>
			<img src='/unspashlogo.png' className='h-6' />

			<div className='flex w-3/5 min-w-3/5 h-full justify-center items-center'>
				<Icons.CharmSearch />
				<input
					value={query}
					onKeyDown={(e) => {
						if (e.key === 'Enter') {
							onSearch()
						}
					}}
					onChange={(e) => setQuery(e.target.value)}
					placeholder='Search the images'
					className='text-black px-1 py-2 w-full h-full outline-none border-t-2 border-b-2 font-semibold'
				/>
				<Icons.Right />
			</div>
			<button
				ref={aref}
				onClick={onSearch}
				className='flex justify-center items-center h-full gap-3 px-5 border-2 border-gray-900 bg-black rounded-full text-white font-semibold'
			>
				<Icons.SearchIcon /> Search
			</button>
		</>
	)

	if (user) {
		return (
			<div className='flex justify-between items-center w-full h-16 absolute top-0 px-10 font-semibold text-gray-400'>
				<div className='flex justify-center items-center h-10 gap-5'>
					{getAllImages()?.length > 0 ? searchBar : <></>}
				</div>
				<div className='flex gap-10 justify-center items-center'>
					<button
						onClick={() => navigate('/')}
						className='hover:text-black hover:underline underline-offset-8 underline-2'
					>
						{user.email}
					</button>
					<button
						onClick={() => navigate('/')}
						className='hover:text-black hover:underline underline-offset-8 underline-2'
					>
						Search
					</button>
					<button
						onClick={() => navigate('/favorites')}
						className='hover:text-black hover:underline underline-offset-8 underline-2'
					>
						Favorites
					</button>
					<button
						onClick={() => {
							logout()
							navigate('/')
						}}
						className='flex gap-2 items-center justify-center bg-black text-white px-4 py-1 rounded-full drop-shadow-md'
					>
						Logout
						<Icons.CharmChevronRight />
					</button>
				</div>
			</div>
		)
	}

	return (
		<div className='flex justify-between items-center w-full h-16 absolute top-0 px-10 gap-10 font-semibold text-gray-400'>
			<div className='flex justify-center items-center h-10 gap-10'>
				{getAllImages()?.length > 0 ? searchBar : <></>}
			</div>
			<div className='flex gap-10 justify-center items-center'>
				<button
					onClick={() => navigate('/')}
					className='hover:text-black hover:underline underline-offset-8 underline-2'
				>
					Search
				</button>
				<button
					onClick={() => navigate('/login')}
					className='hover:text-black hover:underline underline-offset-8 underline-2'
				>
					Login
				</button>
				<button
					onClick={() => navigate('/signup')}
					className='flex gap-2 items-center justify-center bg-black text-white px-4 py-1 rounded-full drop-shadow-md'
				>
					Sign Up
					<Icons.CharmChevronRight />
				</button>
			</div>
		</div>
	)
}

function Home() {
	const [current, setCurrent] = useState()
	const [search, setSearch] = useState()
	const { addImages } = useImages()
	const nav = useNavigate()

	const onSearch = async () => {
		const res = await Search({ query: search, per_page: 30 })
		nav(`/search`)
		addImages(search, res.data.results)
	}

	const onRandom = async () => {
		const res = await Search({ query: current, per_page: 30 })
		nav(`/search`)
		addImages(current, res.data.results)
	}

	return (
		<div className='flex flex-col w-full h-full justify-center items-center'>
			<img src='/unspashlogo.png' alt='Unsplash Logo' width='320px' />
			<div className='flex w-2/5 justify-center items-center my-14'>
				<Icons.CharmSearch />
				<input
					value={search}
					onKeyDown={(e) => {
						if (e.key === 'Enter') {
							onSearch()
						}
					}}
					onChange={(e) => setSearch(e.target.value)}
					placeholder='Search the images'
					className='px-1 py-2 w-full outline-none border-t-2 border-b-2 font-semibold'
				/>
				<Icons.Right />
			</div>
			<div className='flex gap-4'>
				<button
					onClick={onSearch}
					className='flex justify-center items-center gap-3 px-5 py-2 border-2 border-gray-900 bg-black rounded-full text-white drop-shadow-lg font-semibold'
				>
					<Icons.SearchIcon /> Search
				</button>
				<button
					onClick={onRandom}
					className='flex justify-center items-center gap-3 px-5 py-2 border-2 border-gray-900 bg-black rounded-full text-white drop-shadow-lg font-semibold'
				>
					<Icons.CharmGitCompare />
					<TypeAnimation
						preRenderFirstString={true}
						sequence={[
							() => setCurrent('Cars'),
							'Random - Cars',
							3000,
							() => setCurrent('Adventure'),
							'Random - Adventure',
							3000,
							() => setCurrent('Mountains'),
							'Random - Mountains',
							3000,
							() => setCurrent('Space'),
							'Random - Space',
							3000,
							() => setCurrent('Earth'),
							'Random - Earth',
							3000,
						]}
						wrapper='span'
						speed={6}
						repeat={Infinity}
					/>
				</button>
			</div>
		</div>
	)
}

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/login',
		element: <Login />,
	},
	{
		path: '/signup',
		element: <Signup />,
	},
	{
		path: '/search',
		element: <Main />,
	},
	{
		path: '/favorites',
		element: <Favorites />,
	},
])

function App() {
	return (
		<>
			<Router basename='/'>
				<TopBar />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/login' element={<Login />} />
					<Route path='/signup' element={<Signup />} />
					<Route path='/search' element={<Main />} />
					<Route path='/favorites' element={<Favorites />} />
				</Routes>
			</Router>
		</>
	)
}

export default App
