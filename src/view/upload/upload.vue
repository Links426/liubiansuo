<template>
	<el-upload
		class="upload-demo"
		ref="uploadRef"
		drag
		action="http://172.22.56.12:9632/file/change"
		multiple
	>
		<i class="el-icon-upload"></i>
		<div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
	</el-upload>
</template>
<script setup lang="ts"></script>

<style scoped></style>
