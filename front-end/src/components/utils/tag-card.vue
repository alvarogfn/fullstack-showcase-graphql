<template>
  <p class="tag">
    <slot></slot>
  </p>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
  .tag {
    font-size: 0.8rem;
    background-color: var(--color-6);
    color: var(--color-1);

    border-radius: 5px;
    padding: 2.5px 5px;
    max-width: fit-content;

    text-transform: capitalize;
  }
</style>
