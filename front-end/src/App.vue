<template>
  <div class="app">
    <header-component class="app__header" />
    <div class="app__content">
      <router-view v-slot="{ Component }">
        <component :is="Component" />
      </router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
  import HeaderComponent from "./components/header/header-component.vue";
</script>

<style lang="scss" scoped>
  .app {
    &__content {
      position: relative;
    }
  }
</style>
