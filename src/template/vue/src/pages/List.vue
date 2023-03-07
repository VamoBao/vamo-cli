<template>
  <div>
    <!-- 表格 -->
    <el-table :data="sourceData" border>
      <el-table-column type="index" label="序号" min-width="60"/>
      <el-table-column prop="id" label="item1"/>
      <el-table-column prop="id" label="item2"/>
      <el-table-column prop="id" label="item3"/>
    </el-table>
    <p>{{ countStore.double }}</p>
    <el-button @click="onIncrement">+2</el-button>
  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
import { useCount } from '@/store/count'

/** 状态管理 */
const countStore = useCount()

/** 表单数据 */
const sourceData = ref([
  { id: '123' },
  { id: '123' },
  { id: '123' },
  { id: '123' },
  { id: '123' }
])

/** +2操作 */
const onIncrement = () => {
  countStore.incrementAny(2)
}
</script>

<style lang='less' scoped></style>
