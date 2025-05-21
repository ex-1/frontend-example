import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
	plugins: [react()],

	resolve: { alias: { '@': resolve(__dirname, '../src') } },

	root: resolve(__dirname, '../'),

	server: { host: '0.0.0.0', port: 8080 }
})
