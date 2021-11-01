<template>
 <UpMenu/>
  <h1>这是背包哦～</h1>
   <el-popconfirm
    confirm-button-text="OK"
    cancel-button-text="No, Thanks"
    icon="el-icon-info"
    icon-color="green"
    title="Are you sure to delete this?"
  >
    <template #reference>

  <ul v-infinite-scroll="load" class="infinite-list" style="overflow: auto">
    <li v-for="i in count" :key="i" class="infinite-list-item">
       {{ i }} 
    </li>
  </ul>
   </template>
  </el-popconfirm>


</template>

<script >
import { defineComponent, ref } from 'vue'

import UpMenu from '@/components/upmenu.vue'

export default {
   setup() {
    const count = ref(0)
    const load = () => {
      if(count.value<10)
      count.value += 2
    }
    return {
      count,
      load,
    }
  },
  name: 'Home',
  components: {
    UpMenu
  }
}
</script>


<style>
.infinite-list {
  height: 600px;
  padding: 0;
  margin: 0;
  list-style: none;}

.infinite-list-item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80px;
    background: var(--el-color-primary-light-9);
    margin: 10px;
    color: var(--el-color-primary);
}
    .list-item {
      margin-top: 10px;
    }
  
</style>
