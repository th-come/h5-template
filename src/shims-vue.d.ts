/* eslint-disable */
declare module '*.vue' {
	import type { DefineComponent } from 'vue'
	const component: DefineComponent<{}, {}, any>
	export default component
}
declare module '*.scss' {
	const content: any;
	export default content;
}
declare interface Window {
	__wpk: any;
}