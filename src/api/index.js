import axios from 'axios'

const BASE_API_URL = import.meta.env.VITE_BASE_URL
const UNSPLASH_API_URL = import.meta.env.VITE_UNSPLASH_URL
const UNSPLASH_ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY

export const getHeader = () => {
	return {
		headers: {
			Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
			'Content-Type': 'application/json',
		},
	}
}

export const getMultipartHeader = () => {
	return {
		headers: {
			Authorization: `Bearer ${localStorage.getItem('token')}`,
			'content-type': 'multipart/form-data',
		},
	}
}

export const getUnsplashHeader = () => {
	return {
		headers: {
			Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
			'Content-Type': 'application/json',
		},
	}
}

export const instance = axios.create({
	baseURL: BASE_API_URL,
})

export const unsplash = axios.create({
	baseURL: UNSPLASH_API_URL,
})

export default instance
