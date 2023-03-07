<script setup lang="ts">
import { RouterView } from 'vue-router'
import { UserFilled } from '@element-plus/icons-vue'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
</script>

<template>
  <el-config-provider :locale="zhCn">
    <el-container class="whole-height">
      <!-- 侧边导航 -->
      <el-aside width="200px">
        <!-- 目录 -->
        <el-menu
        class="whole-height pdt-60" router >
          <el-sub-menu index="1">
            <template #title>
              <el-icon>
                <i-ep-house/>
              </el-icon>
              <span>首页</span>
            </template>
            <el-menu-item index="1-1" route="/home/data">数据</el-menu-item>
            <el-menu-item index="1-2" route="/home/list">列表</el-menu-item>
          </el-sub-menu>
          <el-menu-item index="2" route="/setting">
            <template #title>
              <el-icon>
                <i-ep-setting/>
              </el-icon>
              <span>系统设置</span>
            </template>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <!-- Header -->
        <el-header class="header">
          <el-row align="middle" class="whole-height text-right">
            <el-col>
              <el-space>
                <el-avatar :size="32" :icon="UserFilled"/>
                <el-dropdown>
                  <span :size="8">
                    username
                    <el-icon>
                      <i-ep-arrow-down/>
                    </el-icon>
                  </span>
                  <template #dropdown>
                    <el-dropdown-menu>
                      <el-dropdown-item>帮助文档</el-dropdown-item>
                      <el-dropdown-item>退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                  </template>
                </el-dropdown>
              </el-space>
            </el-col>
          </el-row>
        </el-header>
        <!-- 主内容区域 -->
        <el-main class="main">
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </el-config-provider>
</template>

<style scoped >
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.header {
  height: 48px;
  border-bottom: 1px solid var(--el-menu-border-color);
}

.main {
  padding: 16px;
}
</style>
