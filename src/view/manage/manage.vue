<template>
	<div>
		<button @click="open15">开启15</button>
		<button @click="close15">关闭15</button>
		<button @click="open16M300">开启16M300</button>
		<button @click="close16M300">关闭16M300和matlab</button>
		<button @click="open16Matlab">开启16Matlab</button>
		<button @click="openSp">开启sp</button>

		<div flex>
			<div
				min-w-440px
				h-240px
				p-16px
				mr-20px
				bg-white
				rounded-10px
				flex
				flex-col
				justify-between
			>
				<!-- 顶部 -->
				<div w-full flex justify-between items-center>
					<div
						class="bg-#7BAFFC rounded-50% w-86px h-86px flex justify-center items-center"
					>
						<i class="iconfont text-white icon-wurenji" style="font-size: 40px"></i>
					</div>

					<div>
						<div text-32px text-blue>无人机 渲染动力案例</div>
						<div
							w-100px
							h-40px
							rounded-19px
							mt-6px
							text-center
							lh-40px
							text-white
							bg-green
							:class="planeStatus ? 'bg-red' : ''"
							class="pointer transtion-6s"
							@click="runPlane"
						>
							{{ !planeStatus ? '立即开启' : '关闭服务' }}
						</div>
					</div>
				</div>

				<div>依赖节点：12、15、16</div>
			</div>
			<div
				min-w-440px
				h-240px
				p-16px
				mr-20px
				bg-white
				rounded-10px
				flex
				flex-col
				justify-between
			>
				<!-- 顶部 -->
				<div w-full flex justify-between items-center>
					<div
						class="bg-#7BAFFC rounded-50% w-86px h-86px flex justify-center items-center"
					>
						<i class="iconfont text-white icon-junren" style="font-size: 40px"></i>
					</div>

					<div>
						<div text-32px text-blue>沙漠反恐侦查 案例</div>
						<div
							w-100px
							h-40px
							rounded-19px
							mt-6px
							text-center
							lh-40px
							text-white
							bg-green
							:class="desertStatus ? 'bg-red' : ''"
							class="pointer transtion-6s"
							@click="runDesert"
						>
							{{ !desertStatus ? '立即开启' : '关闭服务' }}
						</div>
					</div>
				</div>

				<div>依赖节点：12、15、16</div>
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">
import axios from 'axios'

const api = 'http://172.22.56.12:9632'
let start15PlaneId = ''
let start16M300 = ''
let start16Matlab = ''

let start15DesertId = ''
let start16DesertId = ''

const planeStatus = ref<boolean>(false)
const desertStatus = ref<boolean>(false)

const open15 = () => {
	axios
		.get(api + '/serve/start15', {
			params: { process_name: 'startue', token: 0, process_isshell: 'false' },
		})
		.then((res) => {
			console.log(1)

			start15PlaneId = res.data.body.process_id
		})
}

const close15 = () => {
	// 关闭15

	axios
		.get(api + '/serve/stop15', {
			params: { process_id: start15PlaneId },
		})
		.then((res) => {
			console.log(res)
		})
}

const open16M300 = () => {
	// 开启16 M300

	axios
		.get(api + '/serve/start16', {
			params: { process_name: 'startM300', token: 1, process_isshell: 'false' },
		})
		.then((res) => {
			console.log(1)

			start16M300 = res.data.body.process_id
		})
}

const open16Matlab = () => {
	// 开启16 Mablab

	// 开启16 Mablab

	axios
		.get(api + '/serve/start16', {
			params: { process_name: 'startMatlab', token: 0, process_isshell: 'false' },
		})
		.then((res) => {
			console.log(1)

			start16Matlab = res.data.body.process_id
		})
}
const close16M300 = () => {
	// 关闭16 M300

	axios
		.get(api + '/serve/stop16', {
			params: { process_id: start16M300 },
		})
		.then((res) => {
			console.log(res)
		})

	// 关闭16 Matlab

	axios
		.get('http://172.22.56.12:9632/serve/stop16', {
			params: { process_id: start16Matlab },
		})
		.then((res) => {
			console.log(res)
		})
}

const alert = () => {
	ElNotification({
		title: '加载 12 节点 成功！',
		message: '12 节点 工作正常',
		type: 'success',
	})
	setTimeout(() => {
		ElNotification({
			title: '加载 15 节点 成功！',
			message: '15 节点 工作正常',
			type: 'success',
		})
	}, 1000)
	setTimeout(() => {
		ElNotification({
			title: '加载 16 节点 成功！',
			message: '16 节点 工作正常',
			type: 'success',
		})
	}, 2000)
}

const runPlane = () => {
	alert()
	if (planeStatus.value == false) {
		// 开启15

		axios
			.get(api + '/serve/start15', {
				params: { process_name: 'startue', token: 0, process_isshell: 'false' },
			})
			.then((res) => {
				start15PlaneId = res.data.body.process_id
			})
		// 开启16 Mablab

		axios
			.get(api + '/serve/start16', {
				params: { process_name: 'startMatlab', token: 0, process_isshell: 'false' },
			})
			.then((res) => {
				start16Matlab = res.data.body.process_id
			})

		// 开启16 M300

		axios
			.get(api + '/serve/start16', {
				params: { process_name: 'startM300', token: 1, process_isshell: 'false' },
			})
			.then((res) => {
				start16M300 = res.data.body.process_id
			})

		planeStatus.value = !planeStatus.value
	} else {
		// 关闭15

		axios.get('http://172.22.56.12:9632/serve/stop15', {
			params: { process_id: start15PlaneId },
		})

		// 关闭16 M300

		axios.get('http://172.22.56.12:9632/serve/stop16', {
			params: { process_id: start16M300 },
		})

		// 关闭16 Matlab

		axios.get('http://172.22.56.12:9632/serve/stop16', {
			params: { process_id: start16Matlab },
		})

		planeStatus.value = !planeStatus.value
	}
}

const runDesert = () => {
	alert()
	if (desertStatus.value == false) {
		// 开启15

		axios
			.get(api + '/serve/start15', {
				params: { process_name: 'startdesert', token: 0, process_isshell: 'false' },
			})
			.then((res) => {
				start15DesertId = res.data.body.process_id
			})
		axios
			.get(api + '/serve/start16', {
				params: { process_name: 'startaim', token: 0, process_isshell: 'true' },
			})
			.then((res) => {
				start16DesertId = res.data.body.process_id
			})

		desertStatus.value = !desertStatus.value
	} else {
		// 关闭15

		axios.get(api + '/serve/stop15', {
			params: { process_id: start15DesertId },
		})
		// 关闭16
		axios.get(api + '/serve/stop15', {
			params: { process_id: start16DesertId },
		})

		desertStatus.value = !desertStatus.value
	}
}

const openSp = () => {
	axios
		.get(api + '/serve/spStart', {
			params: { ifstore: '1', scenes: "'anti'反恐 'field' 农田" },
		})
		.then((res) => {
			console.log(res)
		})
}
</script>

<style scoped>
.pointer {
	cursor: pointer;
}
.transtion-6s {
	transition: all 0.6s;
}
</style>
