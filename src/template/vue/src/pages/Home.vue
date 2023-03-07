<template>
  <div>
    <!-- 表单 -->
    <el-form ref="form" :model="formData" :rules="rules" inline>
      <el-form-item prop="date">
        <el-date-picker v-model="formData.date" placeholder="请选择日期"/>
      </el-form-item>
      <el-form-item>
        <!-- 提交按钮 -->
        <el-button type="primary" @click="onSubmit(form)">Submit</el-button>
      </el-form-item>
      <p>{{ countStore.count }}</p>
      <el-button @click="onIncrement">+1</el-button>
      <el-button @click="onReset">Reset</el-button>
    </el-form>

  </div>
</template>

<script setup lang='ts'>
import { reactive, ref } from 'vue'
import { ElMessage } from 'element-plus'
import type { FormRules, FormInstance } from 'element-plus'
import { useCount } from '@/store/count'

/** 表单实例 */
const form = ref<FormInstance>()

/** 状态管理 */
const countStore = useCount()

/** 表单数据 */
const formData = reactive({
  date: ''
})

/** 表单验证规则 */
const rules = reactive<FormRules>({
  date: [
    { required: true, message: '请选择日期', trigger: 'blur' }
  ]
})

/** 提交操作 */
const onSubmit = async (formIns: FormInstance | undefined) => {
  if (!formIns) return
  await formIns.validate((valid, fields) => {
    if (valid) {
      ElMessage({
        type: 'warning',
        message: formData.date
      })
    }
  })
}

/** +1操作 */
const onIncrement = () => countStore.count++

/** 重置状态 */
const onReset = () => countStore.$reset()

</script>

<style lang='less' scoped></style>
