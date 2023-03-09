const routes = [
	{
		path: '/',
		name: 'Index',
		component: () => import('@/view/index/index.vue'),
		redirect: '/main',
		children: [
			{ path: '/main', component: () => import('@/view/mainData/mainData.vue') },
			{ path: '/manage', component: () => import('@/view/manage/manage.vue') },
			{ path: '/upload', component: () => import('@/view/upload/upload.vue') },
			{
				path: '/watch',
				component: () => import('@/view/watch/watch.vue'),
				redirect: '/watch/view12',
				meta: {
					keepAlive: true, //设置页面是否需要使用缓存
				},
				children: [
					{
						path: '/watch/view12',
            name:'View12',
						component: () => import('@/view/watchPoint/view12.vue'),
						meta: {
							keepAlive: true, //设置页面是否需要使用缓存
						},
					},
					{
						path: '/watch/view15',
            name:'View15',
						component: () => import('@/view/watchPoint/view15.vue'),
						meta: {
							keepAlive: true, //设置页面是否需要使用缓存
						},
					},
					{
						path: '/watch/view16',
            name:'View16',
						component: () => import('@/view/watchPoint/view16.vue'),
						meta: {
							keepAlive: true, //设置页面是否需要使用缓存
						},
					},
				],
			},
		],
	},
]
export default routes
