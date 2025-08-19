import { defineConfig, type PluginOption } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { visualizer } from 'rollup-plugin-visualizer'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const plugins: PluginOption[] = [react()]
  if (mode === 'alpha') {
    plugins.push(visualizer({
      gzipSize: true,
      open: true,
    }))
  }
  return {
    plugins: plugins,
    server: {
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
          chunkFileNames: 'js/[name].[hash].js',
          assetFileNames: assetInfo => assetInfo.names?.some(n => n.endsWith('.css')) ? 'css/[name].[hash][extname]' : 'assets/[name].[hash][extname]',
        },
      },
    },
  }
})
