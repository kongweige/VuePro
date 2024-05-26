<script setup>
    import {ref} from "vue"
    import Article from "./Article.vue";
    const mmsg = ref("Main")
</script>

<template>
    <div class="main">
        {{ mmsg }}
        <Article></Article>
        <Article></Article>
    </div>
</template>

<style>
    .main{
        width: 900px;
        height: 625px;
        margin-top: 15px;
        padding: 15px;
        background: yellow;
    }
</style>
