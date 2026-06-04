import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default {
  plugins: [
    tailwindcss(path.resolve(__dirname, './tailwind.config.js')),
    autoprefixer(),
  ],
}
