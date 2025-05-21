import tailwindcss from '@tailwindcss/vite'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
	plugins: [
		react(),
		TanStackRouterVite({
			target: 'react',
			autoCodeSplitting: true,
			routesDirectory: resolve(__dirname, '../src/pages'),
			routeFileIgnorePattern: String(new RegExp(/^(?!index\.ts$).*/)),
			generatedRouteTree: resolve(__dirname, '../src/app/config/route.gen.ts'),
			quoteStyle: 'single'
		}),
		svgr({ include: [resolve(__dirname, '../src/shared/icons')] }),
		tailwindcss()
	],

	resolve: { alias: { '@': resolve(__dirname, '../src') } },

	root: resolve(__dirname, '../'),

	server: { host: '0.0.0.0', port: 8080 },

	build: { sourcemap: false }
})
