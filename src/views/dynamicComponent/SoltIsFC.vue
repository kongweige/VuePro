<script setup>
import Home from './SoltIsHomeSC.vue'
import About from './SoltIsAboutSC.vue'
import { ref } from 'vue'

const currentTab = ref('Home')

const tabs = {
  Home,
  About
}

</script>

<template>
  <div class="demo">
    <button
       v-for="(_, tab) in tabs"
       :key="tab"
       :class=" { active: currentTab === tab }"
       @click="currentTab = tab"
     >
      {{ tab }}
    </button>
      <component :is="tabs[currentTab]" ></component>
  </div>
</template>

<style>
    .active {
    background: red;
    }
</style>
