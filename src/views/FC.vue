<script setup>
    import SC from './SC.vue';
    import {ref} from "vue"
    const content = ref("传递给子组件数据")

</script>


<template>
    
    <h1>父组件内容</h1>
    <p>--------------------------------</p>
    <hr>
    <SC />
    <hr>
    <SC title="只给title的子组件使用方式"></SC>
    <hr>
    <SC title="只给title的子组件使用方式" :content="content"></SC>

</template>