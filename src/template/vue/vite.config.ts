import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import ElementPlus from 'unplugin-element-plus/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import {resolve} from 'path'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [
        ElementPlusResolver(),
        // element icon自动引入
        IconsResolver({
          prefix: 'Icon',
        }),
      ],
    }),
    Components({
      resolvers: [
        ElementPlusResolver(),
        // element icon自动引入
        IconsResolver({
          enabledCollections: ['ep'],
        }),
      ],
    }),
    Icons({
      autoInstall: true,
    }),
    ElementPlus({}),
  ],
  resolve:{
    // 配置别名，tsconfig需同步
    alias: {
      '@':resolve(__dirname,'src'),
      'pages':resolve(__dirname,'src/pages'),
      'components':resolve(__dirname,'src/components'),
      'assets':resolve(__dirname,'src/assets'),
      'store':resolve(__dirname,'src/store'),
    }
  }
})
