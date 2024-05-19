<template>
  <transition name="grow">
    <slot></slot>
  </transition>
</template>

<style lang="scss" scoped>
  .grow {
    &-enter-active,
    &-leave-active {
      transition: 400ms;
    }

    &-enter-from {
      max-height: 0;
    }

    &-leave-from {
      max-height: 400px;
    }

    &-enter-to {
      max-height: 400px;
    }

    &-leave-to {
      max-height: 0;
    }
  }
</style>
