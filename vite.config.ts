import { defineConfig } from 'vite'
import handlebars from 'vite-plugin-handlebars';

export default defineConfig({
    plugins: [
        // @ts-ignore
        handlebars(), 
    ],
    build: {
        outDir: 'dist'
    },
    server: {
        port: 3000
    }
})