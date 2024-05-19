<template>
  <transition name="fade">
    <slot></slot>
  </transition>
</template>

<style lang="scss" scoped>
  .fade {
    &-enter-active,
    &-leave-active {
      transition: 200ms;
    }

    &-enter-from {
      transform: translateY(5px);
      filter: opacity(0%);
    }

    &-leave-from {
      transform: translateY(0px);
      filter: opacity(100%);
    }

    &-enter-to {
      transform: translateY(0px);
      filter: opacity(100%);
    }

    &-leave-to {
      transform: translateY(5px);
      filter: opacity(0%);
    }
  }
</style>
