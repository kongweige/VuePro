<!-- <script setup>
import SlotFC from "./views/slot/SlotFC.vue";
</script>

<template>
    <SlotFC />
</template> -->


<!-- <script setup>
    import SlotIsFC from "./views/dynamicComponent/SoltIsFC.vue";
</script>

<template>
    <SlotIsFC></SlotIsFC>
</template> -->


<template>
    <div class="nav">   
        <router-link to="/ceshiren"> 测试人界面 </router-link>
        <a href="" class="box">测试人界面</a>
        <router-link to="/user/:id" class="box">霍格沃兹界面</router-link>
        <router-link to="/user/1" class="box">Vue1</router-link>
        <router-link to="/user/2" class="box">Vue2</router-link>
        <router-link to="/user/3" class="box">Vue3</router-link>

        <!-- 界面展示接口 -->
        <router-view></router-view>
    </div>
</template>

<style scoped>
    .box{
        margin-left: 20px;
    }
</style>