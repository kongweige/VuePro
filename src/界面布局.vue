<script setup>
// 导入组件
import Header from './views/Header.vue';
import Main from './views/Main.vue';
import Aside from './views/Aside.vue';

</script>

<template>
  <!-- 使用组件 -->
  <div class="root">
    <Header></Header>
    <div class="rmain">
      <Main></Main>
      <Aside></Aside>
    </div>
  </div>

</template>

<style scoped>
  .root{
        width: 1200px;
        height: 800px;
        background: burlywood;
        margin: 0 auto;
        padding: 15px;
        box-sizing: border-box;
        line-height: 100px;
        text-align: center;
        font-size: 30px;
  }
  .rmain{
        display: flex;
  }
</style>


