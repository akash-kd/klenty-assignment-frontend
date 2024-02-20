import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Toaster } from 'react-hot-toast'
import { UserProvider } from './context/userContext.jsx'
import { ImageProvider } from './context/imagesContext.jsx'


import {
	QueryClient,
	QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<UserProvider>
			<ImageProvider>
				<QueryClientProvider client={queryClient}>
					<App />
					<Toaster />
				</QueryClientProvider>
			</ImageProvider>
		</UserProvider>
	</React.StrictMode>,
)
