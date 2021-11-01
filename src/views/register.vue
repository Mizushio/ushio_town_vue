<template>
  <div id="register">
      <UpMenu/>  
      <br>
      <br>
      <div class="center">
  <el-steps :active="active" finish-status="success">
    <el-step title="Step 1"></el-step>
    <el-step title="Step 2"></el-step>
    <el-step title="Step 3"></el-step>
  </el-steps>
<br><br>
    <div class="form">
 <el-form ref="form" label-width="120px" label-position="top">
    <el-form-item label="email">
      <el-input  v-model="email" disabled='true' v-if="active>=1">
      <template #append>@qq.com</template>
      </el-input>

    <el-input  v-model="email" v-if="active<1">
        <template #append>@qq.com</template>
    </el-input>

    </el-form-item>
     <el-form-item label="password" v-if="active==2">
      <el-input v-model="password"></el-input>
    </el-form-item>
     <el-form-item label="code" v-if="active==1">
      <el-input v-model="code"></el-input>
    </el-form-item>
  </el-form>
  <el-button style="margin-top: 12px" @click="next">Next step</el-button>
</div>





  </div>
  </div>
</template>

<script >

import UpMenu from '@/components/upmenu.vue'
import { ElNotification } from 'element-plus'

export default {
  name: 'register',
  data() {
    return {
      active: 0,
      email:"",
      code:"",
      password:"",
    }
  },
  components: {
    UpMenu
  },
  methods: {
    next() {
         if(this.active==0){
             var reg = /^[1-9]\d*$/;
        
            if(reg.test(this.email)==false){
            ElNotification({
            title: '邮箱填写失败',
            message: '请填写正确的QQ邮箱',
            type: 'error',
            duration:'2000',
            })
            return;
            }
            
         }        
      this.active++
     
    },
  },
}
</script>
<style>
.center{
    margin:0 auto;
    /* border:1px solid #000; */
    width:800px;
}
.form{
       margin:0 auto;
    width:600px;

}


</style>