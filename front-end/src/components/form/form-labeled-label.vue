<template>
  <label class="label">
    {{ props.label }}
    <slot></slot>
  </label>
</template>

<script setup lang="ts">
  interface Props {
    label: string;
  }

  const props = defineProps<Props>();
</script>

<style lang="scss" scoped>
  .label {
    font-size: 1rem;
    color: var(--color-6);

    display: flex;
    flex-flow: column nowrap;
    text-transform: capitalize;
    gap: 10px;
  }
</style>
