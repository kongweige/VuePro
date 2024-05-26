<script setup>
    import {ref} from "vue"
    const asmsg = ref("Aticle")
</script>

<template>
    <div class="aticle">
        {{ asmsg }}
    </div>
</template>

<style>
    .aticle{
        width: 870px;
        height: 250px;
        margin-bottom: 15px;
        background: orange;
        border: 1px solid #000;
    }
</style>
