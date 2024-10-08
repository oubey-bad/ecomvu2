import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
// resolve:{
  //   alias: {
  //     '@':fileURLToPath(new URL('./src',import.meta.url))
  //   }
  // },
export default defineConfig({
  plugins: [vue()],
  // 
  server: {
    proxy:{
      '/api':{
        target: "http://127.0.0.1:8000",
        changeOrigin: true,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        }
      }
    }
  }
})
