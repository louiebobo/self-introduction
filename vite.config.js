import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/self-introduction/',   // 改成你的 repo 名稱
  plugins: [react()],
})
