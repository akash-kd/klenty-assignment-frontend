import React, { createContext, useState, useContext, useEffect } from 'react'

const UserContext = createContext()

export const UserProvider = ({ children }) => {
	const [user, setUser] = useState(null)
	const [accessToken, setAccessToken] = useState()
	const [refreshToken, setRefreshToken] = useState()

	useEffect(() => {
		const save = async () => {
			const storedUser = await JSON.parse(localStorage.getItem('user'))
			const storedAccessToken = await localStorage.getItem('accessToken')
			const storedRefreshToken = await localStorage.getItem('refreshToken')

			if (storedUser && storedAccessToken && storedRefreshToken) {
				setUser(storedUser)
				setAccessToken(storedAccessToken)
				setRefreshToken(storedRefreshToken)
			}
		}

		save();
	}, [])

	const updateUser = (newUser, newAccessToken, newRefreshToken) => {
		setUser(newUser)
		setAccessToken(newAccessToken)
		setRefreshToken(newRefreshToken)

		// Store in local storage
		localStorage.setItem('user', JSON.stringify(newUser))
		localStorage.setItem('accessToken', newAccessToken)
		localStorage.setItem('refreshToken', newRefreshToken)
	}

	const logout = () => {
		setUser(undefined)
		setAccessToken('')
		setRefreshToken('')

		localStorage.removeItem('user')
		localStorage.removeItem('accessToken')
		localStorage.removeItem('refreshToken')
	}

	const contextValue = {
		user,
		accessToken,
		refreshToken,
		updateUser,
		logout,
	}

	return (
		<UserContext.Provider value={contextValue}>
			{children}
		</UserContext.Provider>
	)
}

export const useUser = () => {
	const context = useContext(UserContext)
	if (!context) {
		throw new Error('useUser must be used within a UserProvider')
	}
	return context
}
