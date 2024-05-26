<script setup>

    import RSC from './RSC.vue';
    import {ref} from "vue"

    const data = ref([
        {sid: "s01",name: "Tom",age: "23"},
        {sid: "s02",name: "Jack",age: "24"},
        {sid: "s03",name: "Rose",age: "25"}
    ])

    // 定义删除数据的方法
    function deleteDataAction(item){
        // console.log("deleteDataAction")
        const idx = data.value.indexOf(item)
        data.value.splice(idx,1)
    }

</script>

<template>
    <RSC :data="data" @delData="deleteDataAction"></RSC>
</template>