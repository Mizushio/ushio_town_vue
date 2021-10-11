<template>
  <div class="home">         
 <UpMenu/>    

    <!-- <div v-if="Math.random() > 0.5">
      Sorry
    </div> -->

    <h1>这是个人中心，欢迎回来{{this.$store.getters.getusername}}</h1>   

    <!-- <el-row>
    <el-col :span="12">
      <div class="grid-content bg-purple">
      </div>
      </el-col>
    <el-col :span="12">
      <div class="grid-content bg-purple-light">
       <Login/>  
      </div>
    </el-col>
  </el-row> -->
  </div>
</template>


<script >

import UpMenu from '@/components/upmenu.vue'

export default {
  name: 'Home',
  components: {
    UpMenu
  }
}
</script>

<style>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>

