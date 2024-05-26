<script setup>
// js代码逻辑

import { ref } from 'vue'
// import {ref} from '@vue/composition-api'
const msg = ref("hello world!!")
const fcolor = ref("color:blue;")
function changeFontColor(){
    fcolor.value = "color:red;"
}

</script>


<template>
<!-- UI结构     -->

    <p :style="fcolor"> {{ msg }} </p>
    <p> <button @click="changeFontColor">修改字体颜色</button> </p>

</template>


<style scoped>

/* 写样式，scoped 让当前样式只作用当前作用域 */
    p{
        font-size: 50px;
    }
    button{
       font-size: 30px; 
    }
</style>