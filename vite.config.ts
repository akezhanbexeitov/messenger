import { defineConfig } from 'vite'
import handlebars from 'vite-plugin-handlebars';
import checker from 'vite-plugin-checker';

export default defineConfig({
    plugins: [
        // @ts-ignore
        handlebars(), 
        checker({
            typescript: true
        })
    ],
    build: {
        outDir: 'dist'
    },
    server: {
        port: 3000
    }
})
