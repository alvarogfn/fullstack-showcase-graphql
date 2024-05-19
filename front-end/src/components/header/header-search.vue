<template>
  <form class="search" @submit.prevent="">
    <label class="search__label">
      <icons-search class="search__icon" />
      <input class="search__input" type="text" />
    </label>
  </form>
</template>

<script setup lang="ts">
  import IconsSearch from "../icons/icon-search.vue";
</script>

<style lang="scss" scoped>
  .search {
    display: flex;

    &__label {
      display: flex;
      align-items: center;
      justify-content: space-between;

      gap: 10px;
      padding: 10px;

      flex-grow: 1;
    }

    &__icon {
      fill: var(--color-6);
      cursor: pointer;
      width: 50px;
      height: 50px;
      padding: 5px;
    }

    &__input {
      height: 100%;
      flex-grow: 1;
      color: var(--color-6);
    }
  }
</style>
