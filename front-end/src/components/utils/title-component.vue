<template>
  <h1 class="title">
    <slot></slot>
  </h1>
</template>

<style lang="scss" scoped>
  .title {
    font-size: 3rem;
    color: var(--color-6);
    text-shadow: 2px 2px 0 var(--color-5);
  }
</style>
