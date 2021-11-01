<template>
  <!-- Form -->
      <el-menu
    :default-active="activeIndex"
    mode="horizontal"
    @select="handleSelect"
  >
     <el-menu-item index="1" v-if="username==''" @click="dialogFormVisible = true">
  <el-button type="text">登录</el-button>

    </el-menu-item>
     
  <el-menu-item index="2" v-if="username!=''" @click="Logout()">
  <el-button type="text">注销</el-button>
  </el-menu-item>

  <el-menu-item index="3" v-if="username==''" @click="Register()" >
    
    <el-button type="text">注册</el-button>
    
  </el-menu-item>


</el-menu>
  <el-dialog v-model="dialogFormVisible" title="登录">
    <el-form :model="form">
      <el-form-item label="账号" :label-width="formLabelWidth">
        <el-input v-model="inputusername" placeholder="请滑动输入QQ" />
      </el-form-item>
      <el-form-item label="密码" :label-width="formLabelWidth">
        <el-input v-model="password" show-password="false" placeholder="请输入密码" />  
      </el-form-item>
      <el-slider
            v-model="inputusername"
            max=99999999999
        ></el-slider>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click="ConfirmOnclick()"
          >Confirm</el-button
        >
      </span>
    </template>
  </el-dialog>

</template>

<script lang="js">
import { defineComponent, reactive, toRefs } from 'vue'
import { ElNotification } from 'element-plus'
export default defineComponent({
  data(){
        return{
            inputusername: "",
            password: "",
            username:"",
        }
        
    },
  setup() {
    const state = reactive({
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
          username: '',
          password: '',
      },
      formLabelWidth: '120px',
      formLabelLength: '60px',
    })

    return {
      ...toRefs(state),
    }
  },
  methods:{
    SendLogin:function(){
      const axios = require('axios');        
      axios.post('http://mizushio.top:8080/ulogin', {
                      username: this.username,
                      password: this.password,
                    })
                    .then(function (response) {
                      console.log(response);
                    })
                    .catch(function (error) {
                      console.log(error);
                    });
    },
    Logout:function(){
      this.$store.commit('setusername',"");
      this.username="";
        //axios
    },
    ConfirmOnclick:function () {
        this.dialogFormVisible = false;
        this.SendLogin();
        this.$store.commit('setusername', this.inputusername);    
        this.username=this.$store.getters.getusername;
        ElNotification({
        title: '登录成功',
        message: '欢迎回来:'+this.inputusername,
        type: 'success',
        duration:'2000',
      })
    },
    Register:function () {
     this.$router.push({path:"/register"})
    }

  },
  //监听函数
  //todo:设置登录不可见
  watch: {
    username: {
      // 当数据发生变化的时候就会触发handler，immediate表示会立即出发
      handler () {
        console.log('hello:'+this.username)
      },
      immediate: true
    }
  }
})
</script>
