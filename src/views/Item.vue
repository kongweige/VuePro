<script setup>
    import {ref} from "vue"
    const imsg = ref("Item")
</script>

<template>
    <div class="item">
        {{ imsg }}
    </div>
</template>

<style>
    .item{
        width: 220px;
        height: 160px;
        margin-block: 15px;
        background: green;
    }
</style>
