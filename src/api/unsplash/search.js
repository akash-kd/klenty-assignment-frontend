import { unsplash } from '..'
import { getUnsplashHeader } from '..'

export default function Search(query) {
	return unsplash.get(
		`/search/photos${
			query && Object.keys(query).length > 0
				? `?${new URLSearchParams(query)}`
				: ''
		}`,
		getUnsplashHeader(),
	)
}
