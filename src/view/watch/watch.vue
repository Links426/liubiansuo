<template>
	<div>
		<div mb-10px>
			<el-button type="primary" @click="toWatch12">12节点</el-button>
			<el-button type="primary" @click="toWatch15">15节点</el-button>
			<el-button type="primary" @click="toWatch16">16节点</el-button>
		</div>
		<div w-full bg-white flex flex-nowrap>
			<iframe id="iframe2" src="12server.html" b-0 w-800px h-600px></iframe>
			<iframe id="iframe2" src="15server.html" b-0 w-800px h-600px></iframe>
			<iframe id="iframe2" src="16server.html" b-0 w-800px h-600px></iframe>
		</div>
	</div>
</template>
<script setup lang="ts">
import router from '@/router'

const toWatch12 = () => {
	router.push('/watch/view12')
}
const toWatch15 = () => {
	router.push('/watch/view15')
}
const toWatch16 = () => {
	router.push('/watch/view16')
}
</script>

<style scoped></style>
