<script setup>
defineProps(["title","content"])
</script>

<template>
    <div>
        <h3> {{ title }} </h3>
        <h3> {{ content }} </h3>
    </div>
</template>