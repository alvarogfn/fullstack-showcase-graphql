<template>
  <button class="button">
    <component class="button__icon" :is="props.icon" />
  </button>
</template>

<script setup lang="ts">
  interface Props {
    icon: any;
  }

  const props = defineProps<Props>();
</script>

<style lang="scss" scoped>
  .button {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 5px;

    background-color: var(--color-6);

    transition: transform 200ms ease-in-out;

    &:active {
      transform: scale(0.9);
    }

    &__icon {
      fill: var(--color-1);
    }
  }
</style>
