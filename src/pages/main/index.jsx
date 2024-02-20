import { useImages } from '../../context/imagesContext'
import { useNavigate } from 'react-router-dom'

import Icons from '../../components/icons/Icons'
import { useEffect } from 'react'
import { AddFav } from '../../api/favourites/favs'
import { useUser } from '../../context/userContext'
import toast from 'react-hot-toast'

function Card({ image }) {
	const { user } = useUser()

	const onAdd = async () => {
		if (!user?._id) {
			toast.error('User not logged in')
		}
		const res = AddFav(
			image.id,
			image.alt_description,
			image.urls,
			user._id,
		)
		res.then(() => {
			toast.success('Added to Favourites')
		}).catch((err) => {
			toast.error(err.response.data.message)
		})
	}
	return (
		<div className='flex flex-col rounded-lg border border-gray-400'>
			<img
				className='w-full rounded-t-lg'
				src={image.urls.small}
				alt={image.alt_description}
			/>
			<div
				onClick={onAdd}
				className='flex justify-center items-center gap-2 h-10 bg-gray-200 text-gray-900 rounded-b-lg font-semibold tracking-tight cursor-pointer hover:underline underline-offset-4 underline-2'
			>
				<Icons.CharmStar />
				<h2>Add to Favorites</h2>
			</div>
		</div>
	)
}

export default function Main() {
	const { getAllImages } = useImages()
	const images = getAllImages()

	const col1 = []
	const col2 = []
	const col3 = []
	const col4 = []

	if (images?.length > 0) {
		for (let i = 0; i < images.length; i++) {
			const image = images[i]
			if (i % 4 == 0) col1.push(<Card image={image} />)
			else if (i % 4 == 1) col2.push(<Card image={image} />)
			else if (i % 4 == 2) col3.push(<Card image={image} />)
			else if (i % 4 == 3) col4.push(<Card image={image} />)
		}
		return (
			<div className='flex w-full h-full pt-20 px-10'>
				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
					<div className='flex flex-col gap-4'>{col1}</div>
					<div className='flex flex-col gap-4'>{col2}</div>
					<div className='flex flex-col gap-4'>{col3}</div>
					<div className='flex flex-col gap-4'>{col4}</div>
				</div>
			</div>
		)
	}
	return (
		<div className='w-full h-full flex justify-center items-center'>
			No Images
		</div>
	)
}
