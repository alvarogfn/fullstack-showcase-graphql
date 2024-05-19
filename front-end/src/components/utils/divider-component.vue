<template>
  <div class="divider">
    <div class="divider__text">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
  .divider {
    height: 3px;
    background-color: var(--color-5);
    position: relative;

    margin: 20px 0;

    &__text {
      padding: 5px 10px;

      background-color: var(--color-1);
      color: var(--color-5);

      font-size: 1.3rem;

      transform: translate(-50%, -50%);
      left: 50%;
      position: absolute;
    }
  }
</style>
