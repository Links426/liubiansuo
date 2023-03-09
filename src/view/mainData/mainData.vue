<template>
	<div flex>
		<div
			bg-white
			min-w-302px
			h-234px
			rounded-7px
			p-30px
			flex
			flex-col
			justify-between
			mr-20px
			v-for="item in pointStatusList"
			:key="item.id"
		>
			<!-- 顶部 -->
			<div class="text-#A9AFC5 font-500">
				<div class="flex items-center">
					<div class="text-#74798C text-22px">{{ item.name }}</div>
					<span text-12px flex items-center ml-10px>
						<svg-icon :iconName="item.classIcon" text-22px text-white mr-6px></svg-icon>
						{{ item.class }}</span
					>
				</div>
				<!-- 日期 -->
				<div text-12px mt-6px>{{ item.date }}</div>
			</div>
			<!-- 中间 -->
			<div flex items-center mb-10px>
				<!-- 左侧 -->
				<div class="w-43px h-43px bg-#89A4DD flex-center rounded-6px">
					<svg-icon iconName="icon-yonghu" text-22px text-white></svg-icon>
				</div>
				<!-- 右侧 -->
				<div class="flex text-#575757 font-600 text-22px ml-20px">
					<div mr-5px>系统</div>
					<div>{{ item.sysStatus }}</div>
				</div>
			</div>
			<!-- 下方 状态 -->
			<div flex font-500 justify-between>
				<div class="text-#FF6969 text-18px">节点操作已部署</div>
				<div class="text-#63B86B text-18px mr-10px">{{ item.startStatus }}</div>
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">
import { reactive } from 'vue'

const pointStatusList = reactive([
	{
		id: 0,
		name: '节点12',
		date: '2022.12.14 星期三',
		sysStatus: '未启动',
		pointStatus: '节点操作已部署',
		startStatus: '可启动',
		class: 'Windows',
		classIcon: 'icon-windows1',
	},
	{
		id: 1,
		name: '节点13',
		date: '2022.12.14 星期三',
		sysStatus: '未启动',
		pointStatus: '节点操作已部署',
		startStatus: '可启动',
		class: 'Windows',
		classIcon: 'icon-windows1',
	},
	{
		id: 2,
		name: '节点15',
		date: '2022.12.14 星期三',
		sysStatus: '未启动',
		pointStatus: '节点操作已部署',
		startStatus: '可启动',
		class: 'Linux',
		classIcon: 'icon-alinuxAliyunLinux2',
	},
	{
		id: 2,
		name: '节点16',
		date: '2022.12.14 星期三',
		sysStatus: '未启动',
		pointStatus: '节点操作已部署',
		startStatus: '可启动',
		class: 'Linux',
		classIcon: 'icon-alinuxAliyunLinux2',
	},
])
</script>

<style scoped></style>
