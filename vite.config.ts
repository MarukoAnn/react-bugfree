import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  // 配置文件别名
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://api.moonshinean.com/', // 代理地址，这里设置的地址会代替axios中设置的baseURL
        changeOrigin: true // 如果接口跨域，需要进行这个参数配置
        // rewrite: (a: string) => a.replace(/^\/api/, '')
      }
    }
  }
})
