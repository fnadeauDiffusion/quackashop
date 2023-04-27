<script setup lang="ts">
import HomeCard from '../components/HomeCard.vue'
</script>

<template>
  <div class="primary-color secondary-color-bg" style="padding: 10px; height: 100%;">
    <div style="font-size: 46px;">
      Bienvenu dans le QuackShop!
    </div>

    <div style="display: flex; flex-direction: row; flex-wrap: wrap;">
      <HomeCard link="/shop">Shop</HomeCard>
      <HomeCard link="/about">About</HomeCard>
    </div>
  </div>
</template>
