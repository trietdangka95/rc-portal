<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import type { FormInstance, FormRules } from 'element-plus'
interface RuleForm {
  username: string
  password: string
}
const router = useRouter()

const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive<RuleForm>({
  username: '',
  password: '',
})
const login = async (formData: FormInstance) => {
  if (!formData) return
  await formData.validate((valid, fields) => {
    if (valid) {
      console.log('login', ruleForm)
      console.log('submit!', formData)
      router.push('/about')
    } else {
      console.log('error submit!', fields)
    }
  })
}
const rules = reactive<FormRules<RuleForm>>({
  username: [{ required: true, message: 'Please input username', trigger: 'blur' }],
  password: [{ required: true, message: 'Please input password', trigger: 'blur' }],
})
</script>
<template>
  <el-row>
    <el-col>
      <h1>Login Page</h1>
      <el-form label-position="top" ref="ruleFormRef" :model="ruleForm" :rules="rules">
        <el-form-item label="Username" prop="username">
          <el-input v-model="ruleForm.username"></el-input>
        </el-form-item>
        <el-form-item label="Password" prop="username">
          <el-input v-model="ruleForm.password" type="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login(ruleFormRef)">Login</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
