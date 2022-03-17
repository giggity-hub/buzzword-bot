import { defineConfig } from 'vite';
import WindiCSS from 'vite-plugin-windicss';

export default defineConfig({
    plugins: [
        WindiCSS(),
    ],
    server: {
        proxy: {
            '/api': {
                target: 'http://localhost:3080',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, '')
            }
        }
    }
})
