<template>
<el-row>
    <el-col :span="23"><div class="grid-content bg-purple-dark">
        <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    :router="true"
  >
  
    <el-menu-item index="/#">个人中心</el-menu-item>
    <el-menu-item index="/bag">背包</el-menu-item>
    <el-menu-item index="/about">扭蛋</el-menu-item>
    <el-menu-item index="">战斗</el-menu-item>
    <el-menu-item index="/Ushio_town">...</el-menu-item>
    
  </el-menu>
      </div></el-col>
    <el-col :span="1"><div class="grid-content bg-purple-dark">
      <login/>
      </div></el-col>
  </el-row>

</template>

<script lang="js">
import { defineComponent, ref } from 'vue'
import login from '@/components/login.vue'
export default defineComponent({
  setup() {
    const activeIndex = ref('1')
    const handleSelect = (key, keyPath) => {
      console.log(key);
      
    }
    return {
      activeIndex,
      handleSelect,
    }
  },
  components: {
    login
  },
  data(){
        return{
          
        }
        
    },
  methods:{
    setpage:function() {
      this.$store.commit('setuserpage',this.handleSelect.key);
    }
  }
})
</script>
