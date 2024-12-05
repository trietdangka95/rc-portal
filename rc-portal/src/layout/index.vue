<script lang="ts" setup>
import SideBar from '@/layout/SideBar.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <div>
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px"> <SideBar /> </el-aside>
        <el-main>
          <transition :key="key" name="fade-transform" mode="out-in">
            <RouterView />
          </transition>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style></style>
