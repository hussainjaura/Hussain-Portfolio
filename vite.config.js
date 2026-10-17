// vite and the react plugin:
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// relative base so it works on github pages whatever the repo is called:
export default defineConfig({
  plugins: [react()],
  base: './',
})
