<template>
	<div h-full>
		<el-container>
			<el-header class="bg-white nav-shadow toolbar" relative z-10>
				<div flex justify-between mt-20px>
					<div class="text-#4380FF flex font-500">
						<svg-icon
							iconName="icon-alinuxAliyunLinux2"
							class="text-32px absolute -top-4px mr-10px"
						></svg-icon>
						<div>流变所节点管理系统</div>
					</div>
				</div>
			</el-header>
			<el-container>
				<el-aside width="200px" bg-white class="aside-shadow pt-20px">
					<el-row>
						<el-col>
							<el-menu default-active="1-1" class="el-menu-vertical-demo">
								<el-sub-menu index="1">
									<template #title lh-22px>
										<i class="iconfont icon-shuju01" style="font-size: 22px" mr-5px></i>
										<span> 节点情况</span>
									</template>
									<el-menu-item-group>
										<el-menu-item index="1-1" @click="toBasic">基本数据</el-menu-item>
									</el-menu-item-group>
								</el-sub-menu>
								<el-menu-item index="2" @click="toManage">
									<i class="iconfont icon-huanj-01" style="font-size: 20px" mr-5px></i>
									<span lh-20px> 节点管理</span>
								</el-menu-item>
								<el-menu-item index="3" @click="toWatch">
									<i class="iconfont icon-quanxian" style="font-size: 22px" mr-5px></i>

									<span>节点监控</span>
								</el-menu-item>
								<el-menu-item index="4" @click="toUpload">
									<i class="iconfont icon-quanxian" style="font-size: 22px" mr-5px></i>

									<span>上传附件</span>
								</el-menu-item>
							</el-menu>
						</el-col>
					</el-row>
				</el-aside>
				<el-main class="bg-#F3F5F9">
					<!-- 节点情况 模块 -->
					<router-view></router-view>
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>
<script lang="ts" setup>
import router from '@/router'
import { ElMessage } from 'element-plus'
onMounted(() => {
	ElMessage.success('节点列表 加载成功')
})
const toBasic = () => {
	router.push('/')
}
const toWatch = () => {
	router.push('/watch')
}

const toManage = () => {
	router.push('/manage')
}
const toUpload = () => {
	router.push('/upload')
}
</script>
<style scoped>
.nav-shadow {
	box-shadow: 2px 0px 26px 0px rgba(67, 128, 255, 0.08);
}
.aside-shadow {
	box-shadow: 2px 0px 26px 0px rgba(67, 128, 255, 0.08);
}
.el-menu {
	border-right: 0;
}
</style>
