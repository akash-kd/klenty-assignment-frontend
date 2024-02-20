import { createContext, useContext, useEffect, useState } from 'react'
const ImageContext = createContext()
export const ImageProvider = ({ children }) => {
	const [images, setImages] = useState([])
	const [query, setQuery] = useState()

	const addImages = (query, newImage) => {
		setQuery(query)
		setImages(newImage)
	}

	const getAllImages = () => {
		return images
	}

	const clearImage = () => {
		setImages([])
	}
	const contextValue = {
		query,
		setQuery,
		addImages,
		getAllImages,
		clearImage,
	}

	return (
		<ImageContext.Provider value={contextValue}>
			{children}
		</ImageContext.Provider>
	)
}

export const useImages = () => {
	const context = useContext(ImageContext)
	if (!context) {
		throw new Error('useImage must be used within an ImageProvider')
	}
	return context
}
