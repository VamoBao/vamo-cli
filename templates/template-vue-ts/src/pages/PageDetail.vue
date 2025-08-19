<template>
  <div class="root">
    <el-button type="primary">Demo</el-button>
    <el-date-picker v-model="value" placeholder="请选择日期" />
  </div>
</template>

<script setup lang="ts">
  const value = ref('')
</script>

<style scoped lang="less">
  .root {
    display: flex;
    justify-content: space-between;
    width: 600px;
    padding: 32px;
  }
</style>
