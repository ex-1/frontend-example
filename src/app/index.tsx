import { createRoot } from 'react-dom/client'

import App from './App'
import './styles/index.css'

const app = document.getElementById('app')

if (app) {
	createRoot(app).render(<App />)
} else {
	throw new Error('Root element not found')
}
