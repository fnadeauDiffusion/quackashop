<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router'
  import Navbar from './components/Navbar.vue'
</script>

<template>
  <div>
    <Navbar />
  </div>
  <div>
    <RouterView />
  </div>
</template>

