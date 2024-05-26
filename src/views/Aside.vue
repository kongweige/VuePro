<script setup>
    import Item from "./Item.vue";
    import {ref} from "vue"
    const asmsg = ref("Aside")
</script>

<template>
    <div class="aside">
        {{ asmsg }}
        <item></item>
        <item></item>
        <item></item>
    </div>
</template>

<style>
    .aside{
        width: 220px;
        height: 625px;
        margin-top: 15px;
        margin-left: 15px;
        padding: 15px;
        background: purple;
    }
</style>
