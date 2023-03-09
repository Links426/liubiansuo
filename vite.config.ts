import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Unocss from 'unocss/vite'
import { presetUno, presetAttributify, presetIcons } from 'unocss'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		AutoImport({
			imports: ['vue'], // 也支持vue-router、axios等
			// 声明文件的存放位置
			dts: './auto-imports.d.ts',
			resolvers: [ElementPlusResolver()],
		}),
		Components({
			resolvers: [ElementPlusResolver()],
		}),
		Unocss({
			presets: [presetUno(), presetAttributify(), presetIcons()],
			shortcuts: {
				'flex-center': 'flex justify-center items-center',
				'flex-center-col': 'flex flex-col justify-center items-center',
				'pb-tabbar': 'pb-77px',
				'pb-navbar': 'pb-54px',
			},
		}),
	],
	resolve: {
		alias: {
			'@': path.resolve('./src'), // @代替src
		},
	},
	base: './',
})
