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
                    <svg-icon iconName="icon-shuju01" text-22px mr-5px></svg-icon>
                    <span>节点情况</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="1-1">基本数据</el-menu-item>
                  </el-menu-item-group>
                </el-sub-menu>
                <el-menu-item index="2">
                  <svg-icon iconName="icon-huanj-01" text-20px mr-6px></svg-icon>
                  <span lh-20px> 节点管理</span>
                </el-menu-item>
                <el-menu-item index="3">
                  <svg-icon
                    iconName="icon-quanxian"
                    text-20px
                    mr-6px
                    font-bold
                  ></svg-icon>

                  <span>节点监控</span>
                </el-menu-item>
              </el-menu>
            </el-col>
          </el-row>
        </el-aside>
        <el-main class="bg-#F3F5F9">
          <!-- 节点情况 模块 -->
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
                    <svg-icon
                      :iconName="item.classIcon"
                      text-22px
                      text-white
                      mr-6px
                    ></svg-icon>
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
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script lang="ts" setup>
import axios from "axios";
axios({
  method: "post",
  url: "http://www.baidu.com",
}).then((res) => {
  console.log(res.data);
});
onMounted(() => {
  ElMessage.success("节点列表 加载成功");
});

const pointStatusList = reactive([
  {
    id: 0,
    name: "节点12",
    date: "2022.12.14 星期三",
    sysStatus: "未启动",
    pointStatus: "节点操作已部署",
    startStatus: "可启动",
    class: "Windows",
    classIcon: "icon-windows1",
  },
  {
    id: 1,
    name: "节点13",
    date: "2022.12.14 星期三",
    sysStatus: "未启动",
    pointStatus: "节点操作已部署",
    startStatus: "可启动",
    class: "Windows",
    classIcon: "icon-windows1",
  },
  {
    id: 2,
    name: "节点15",
    date: "2022.12.14 星期三",
    sysStatus: "未启动",
    pointStatus: "节点操作已部署",
    startStatus: "可启动",
    class: "Linux",
    classIcon: "icon-alinuxAliyunLinux2",
  },
  {
    id: 2,
    name: "节点16",
    date: "2022.12.14 星期三",
    sysStatus: "未启动",
    pointStatus: "节点操作已部署",
    startStatus: "可启动",
    class: "Linux",
    classIcon: "icon-alinuxAliyunLinux2",
  },
]);
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
