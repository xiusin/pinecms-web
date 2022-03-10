import path from "path";
import { UserConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import viteCompression from "vite-plugin-compression";
import { svgBuilder } from "./build/plugins/svg";
import { cool } from "./build/plugins/cool";
import Components from "unplugin-vue-components/vite";

const prefix = `monaco-editor/esm/vs`;

function resolve(dir: string) {
	return path.resolve(__dirname, ".", dir);
}

// https://vitejs.dev/config/

export default (): UserConfig => {
	// 请求代理地址
	const proxy = {
		"/dev": {
			target: "http://localhost:2019/v2",
			changeOrigin: true,
			rewrite: (path) => path.replace(/^\/dev/, "")
		},

		"/pro": {
			target: "https://pinecms.xiusin.cn/v2",
			changeOrigin: true,
			rewrite: (path) => path.replace(/^\/pro/, "/api")
		}
	};

	return {
		base: "/",
		plugins: [
			vue(),
			viteCompression(),
			Components(),
			vueJsx(),
			svgBuilder("./src/icons/svg/"),
			cool()
		],
		resolve: {
			alias: {
				"/@": resolve("src"),
				"/#": resolve("types"),
				"/$": resolve("src/cool/modules")
			}
		},
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: `@use "./src/assets/css/element.scss" as *;`
				}
			}
		},
		server: {
			port: 9090,
			proxy,
			hmr: {
				overlay: true
			}
		},
		define: {
			__PROXY_LIST__: JSON.stringify(proxy)
		},
		build: {
			rollupOptions: {
				output: {
					manualChunks: {
						jsonWorker: [`${prefix}/language/json/json.worker`],
						cssWorker: [`${prefix}/language/css/css.worker`],
						htmlWorker: [`${prefix}/language/html/html.worker`],
						tsWorker: [`${prefix}/language/typescript/ts.worker`],
						editorWorker: [`${prefix}/editor/editor.worker`],
					},
				},
			},
			sourcemap: false,
			polyfillDynamicImport: false // 必须为false
		},
		optimizeDeps: {
			exclude: ["vue-demi"]
		}
	};
};
