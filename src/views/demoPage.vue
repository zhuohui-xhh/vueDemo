<template>
  <div class="demoPage">
      <div class="wrap">
          hellow world  
  <el-button>默认按钮</el-button>
  <el-button type="primary">主要按钮</el-button>
  <el-button type="success">成功按钮</el-button>
  <el-button type="info">信息按钮</el-button>
  <el-button type="warning">警告按钮</el-button>
  <el-button type="danger">危险按钮</el-button>

      </div>
  </div>
</template>

<script>
// import {getProfileInfo} from '@/api/demoPageService.js'
import {getProfileInfo} from '_api/demoPageService.js'
export default {}
</script>

<style lang="scss">
// @import '_style/_variable.scss'; //已经在全局引入了
.wrap {
    color:blue; 
    color:$color-theme;
    height: pxToRem(300);
    width: pxToRem(300);


}
</style>
