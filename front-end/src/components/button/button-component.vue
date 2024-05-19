<template>
  <button>
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
  button {
    font-weight: 500;
    color: var(--color-1);
    background-color: var(--color-5);
    height: 90px;

    transition: 200ms;

    &:active {
      transform: scale(0.95);
    }
  }
</style>
