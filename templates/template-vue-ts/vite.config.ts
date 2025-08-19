import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
      imports: ['vue'],
      dts: true,
      eslintrc: {
        enabled: false,
        globalsPropValue: true,
      },
    }),
    Components({
      resolvers: [ElementPlusResolver()],
      dts: true,
    })],
  server: {
    open:true,
    host: '0.0.0.0',
    port: 3000,
    proxy: {

    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      'assets': path.resolve(__dirname, 'src/assets'),
      'pages': path.resolve(__dirname, 'src/pages'),
      'components': path.resolve(__dirname, 'src/components'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        entryFileNames: 'js/[name].[hash].js',
        chunkFileNames:  'js/[name].[hash].js',
        assetFileNames: assetInfo => assetInfo.names.some(name=>name.endsWith('.css')) ?'css/[name].[hash][extname]' : 'assets/[name].[hash][extname]',
      },
    },
  },
})
