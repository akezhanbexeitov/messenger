// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from 'vite'
// eslint-disable-next-line import/no-extraneous-dependencies
import handlebars from 'vite-plugin-handlebars';
// eslint-disable-next-line import/no-extraneous-dependencies
import checker from 'vite-plugin-checker';

export default defineConfig({
    plugins: [
        // @ts-expect-error Incompatability with types
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
