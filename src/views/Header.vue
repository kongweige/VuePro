<script setup>
    import {ref} from "vue"
    const header_msg = ref("Header")
</script>

<template>
    <div class="header">
        {{ header_msg }}
    </div>
</template>

<style>
    .header{
        width: 1170px;
        height: 100px;
        background:red;
    }
</style>
